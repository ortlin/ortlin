import { Button } from "../components/Button.tsx";
import Select from "../components/Select.tsx";
import Textarea from "../components/Textarea.tsx";
import { WandSparkles } from "lucide-preact";
import { useSignal } from "@preact/signals";
import Form from "../components/Form.tsx";
import openaiApi from "../apis/openaiApi.ts";
import OpenAI from "openai";
import ResultModeration from "../components/ResultModeration.tsx";

export default function FormCreateModeration() {
  const input = useSignal("");
  const model = useSignal("omni-moderation-latest");
  const output = useSignal<OpenAI.Moderation | null>(null);
  const isProcessing = useSignal(false);

  const handleChange = (name: string, value: string) => {
    if (name === "input") input.value = value;
    else if (name === "model") model.value = value;
  };

  const handleCreateClick = async () => {
    isProcessing.value = true;
    output.value = null;
    const result = await openaiApi.createModeration({
      input: input.value,
      model: model.value,
    });
    isProcessing.value = false;
    if (!result) return;
    output.value = result;
  };

  return (
    <Form
      result={output.value && (
        <ResultModeration
          flagged={output.value.flagged}
          flags={output.value.categories}
          scores={output.value.category_scores}
        />
      )}
    >
      <div class="grid gap-4">
        <Textarea
          value={input.value}
          label="Input"
          required={true}
          name="input"
          helpers={[{
            type: "text",
            content:
              "Input (or inputs) to classify. Can be a single string, an array of strings, or an array of multi-modal input objects similar to other models.",
          }]}
          onChange={handleChange}
        />
        <Select
          value={model.value}
          label="Model"
          required={false}
          name="model"
          options={[
            {
              title: "omni-moderation-latest",
              value: "omni-moderation-latest",
            },
            {
              title: "omni-moderation-2024-09-26",
              value: "omni-moderation-2024-09-26",
            },
            {
              title: "text-moderation-latest",
              value: "text-moderation-latest",
            },
            {
              title: "text-moderation-stable",
              value: "text-moderation-stable",
            },
            { title: "text-moderation-007", value: "text-moderation-007" },
          ]}
          helpers={[
            {
              type: "text",
              content:
                "The content moderation model you would like to use. Learn more in ",
            },
            {
              type: "anchor",
              content: "the moderation guide",
              link: "https://platform.openai.com/docs/guides/moderation",
            },
            {
              type: "text",
              content: ", and learn about available models ",
            },
            {
              type: "anchor",
              content: "here",
              link: "https://platform.openai.com/docs/models/moderation",
            },
            {
              type: "text",
              content: ".",
            },
          ]}
          onChange={handleChange}
        />
        <Button
          Icon={WandSparkles}
          strokeColor="border-slate-100"
          textColor="text-slate-900"
          fillColor="bg-slate-100"
          isProcessing={isProcessing.value}
          onClick={handleCreateClick}
        >
          Create moderation
        </Button>
      </div>
    </Form>
  );
}
