import { Button } from "../components/Button.tsx";
import Input from "../components/Input.tsx";
import Select from "../components/Select.tsx";
import Textarea from "../components/Textarea.tsx";
import File from "../components/File.tsx";
import { WandSparkles } from "lucide-preact";
import { useSignal } from "@preact/signals";
import Form from "../components/Form.tsx";
import ResultText from "../components/ResultText.tsx";
import openaiApi from "../apis/openaiApi.ts";

export default function FormCreateTranslation() {
  const file = useSignal<File | null>(null);
  const model = useSignal("");
  const prompt = useSignal("");
  const temperature = useSignal("0");
  const output = useSignal("");
  const isProcessing = useSignal(false);

  const handleChange = (name: string, value: string) => {
    if (name === "model") model.value = value;
    else if (name === "prompt") prompt.value = value;
    else if (name === "temperature") temperature.value = value;
  };

  const handleFileChange = (_name: string, value: File | null) => {
    file.value = value;
  };

  const handleCreateClick = async () => {
    isProcessing.value = true;
    output.value = "";
    const result = await openaiApi.createTranslation({
      file: file.value as File,
      model: model.value,
      prompt: prompt.value,
      temperature: Number(temperature.value),
    });
    isProcessing.value = false;
    if (!result) return;
    output.value = result;
  };

  return (
    <Form
      result={<ResultText text={output.value} />}
    >
      <div class="grid gap-4">
        <File
          accept=".flac,.mp3,.mp4,.mpeg,.mpga,.m4a,.ogg,.wav,.webm"
          name="file"
          label="File"
          required={true}
          helpers={[
            {
              type: "text",
              content:
                "The audio file object (not file name) translate, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.",
            },
          ]}
          onChange={handleFileChange}
        />
        <Select
          value={model.value}
          label="Model"
          required={true}
          name="model"
          options={[
            { title: "whisper-1", value: "whisper-1" },
          ]}
          helpers={[
            { type: "text", content: "ID of the model to use. Only " },
            { type: "highlight", content: "whisper-1" },
            {
              type: "text",
              content:
                " (which is powered by our open source Whisper V2 model) is currently available.",
            },
          ]}
          onChange={handleChange}
        />
        <Textarea
          value={prompt.value}
          label="Prompt"
          required={false}
          name="prompt"
          helpers={[{
            type: "text",
            content:
              "An optional text to guide the model's style or continue a previous audio segment. The ",
          }, {
            type: "anchor",
            content: "prompt",
            link:
              "https://platform.openai.com/docs/guides/speech-to-text/prompting",
          }, { type: "text", content: " should be in English." }]}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="temperature"
          value={temperature.value}
          label="Temperature"
          required={false}
          helpers={[
            {
              type: "text",
              content:
                "The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use ",
            },
            {
              type: "anchor",
              content: "log probability",
              link: "https://en.wikipedia.org/wiki/Log_probability",
            },
            {
              type: "text",
              content:
                " to automatically increase the temperature until certain thresholds are hit.",
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
          Create translation
        </Button>
      </div>
    </Form>
  );
}
