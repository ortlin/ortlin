import { Button } from "../components/Button.tsx";
import Input from "../components/Input.tsx";
import Select, { type Option } from "../components/Select.tsx";
import Textarea from "../components/Textarea.tsx";
import { WandSparkles } from "lucide-preact";
import { useSignal } from "@preact/signals";
import Form from "../components/Form.tsx";

export default function FormCreateImage() {
  const prompt = useSignal("");
  const model = useSignal("dall-e-2");
  const quality = useSignal("standard");
  const size = useSignal("1024x1024");
  const style = useSignal("vivid");
  const user = useSignal("");

  const sizeOptions: Record<string, Option[]> = {
    "dall-e-2": [
      {
        title: "256x256",
        value: "256x256",
      },
      {
        title: "512x512",
        value: "512x512",
      },
      {
        title: "1024x1024",
        value: "1024x1024",
      },
    ],
    "dall-e-3": [
      {
        title: "1024x1024",
        value: "1024x1024",
      },
      {
        title: "1792x1024",
        value: "1792x1024",
      },
      {
        title: "1024x1792",
        value: "1024x1792",
      },
    ],
  };

  const handleChange = (name: string, value: string) => {
    if (name === "prompt") prompt.value = value;
    else if (name === "model") model.value = value;
    else if (name === "quality") quality.value = value;
    else if (name === "size") size.value = value;
    else if (name === "style") style.value = value;
    else if (name === "user") user.value = value;
  };

  const handleCreateClick = () => {
    // TODO
  };

  return (
    <Form
      result={null}
    >
      <div class="grid gap-4">
        <Textarea
          value={prompt.value}
          label="Prompt"
          required={true}
          name="prompt"
          helpers={[
            {
              type: "text",
              content:
                "A text description of the desired image(s). The maximum length is 1000 characters for ",
            },
            {
              type: "highlight",
              content: "dall-e-2",
            },
            { type: "text", content: " and 4000 characters for " },
            {
              type: "highlight",
              content: "dall-e-3",
            },
            { type: "text", content: "." },
          ]}
          onChange={handleChange}
        />
        <Select
          value={model.value}
          label="Model"
          required={false}
          name="model"
          options={[
            { title: "dall-e-2", value: "dall-e-2" },
            { title: "dall-e-3", value: "dall-e-3" },
          ]}
          helpers={[
            { type: "text", content: "The model to use for image generation." },
          ]}
          onChange={handleChange}
        />
        <Select
          value={quality.value}
          label="Quality"
          required={false}
          name="quality"
          options={[
            { title: "standard", value: "standard" },
            { title: "hd", value: "hd" },
          ]}
          helpers={[
            {
              type: "text",
              content: "The quality of the image that will be generated. ",
            },
            { type: "highlight", content: "hd" },
            {
              type: "text",
              content:
                " creates images with finer details and greater consistency across the image. This param is only supported for ",
            },
            { type: "highlight", content: "dall-e-3" },
            { type: "text", content: "." },
          ]}
          onChange={handleChange}
        />
        <Select
          value={size.value}
          label="Size"
          required={false}
          name="size"
          options={sizeOptions[model.value]}
          helpers={[
            {
              type: "text",
              content: "The size of the generated images. Must be one of ",
            },
            { type: "highlight", content: "256x256" },
            { type: "text", content: ", " },
            { type: "highlight", content: "512x512" },
            { type: "text", content: ", or " },
            { type: "highlight", content: "1024x1024" },
            { type: "text", content: " for " },
            { type: "highlight", content: "dall-e-2" },
            { type: "text", content: ". Must be one of " },
            { type: "highlight", content: "1024x1024" },
            { type: "text", content: ", " },
            { type: "highlight", content: "1792x1024" },
            { type: "text", content: ", or " },
            { type: "highlight", content: "1024x1792" },
            { type: "text", content: " for " },
            { type: "highlight", content: "dall-e-3" },
            { type: "text", content: " models." },
          ]}
          onChange={handleChange}
        />
        {model.value === "dall-e-3" &&
          (
            <Select
              value={style.value}
              label="Style"
              required={false}
              name="style"
              options={[
                { title: "vivid", value: "vivid" },
                { title: "natural", value: "natural" },
              ]}
              helpers={[
                {
                  type: "text",
                  content: "The style of the generated images. Must be one of ",
                },
                { type: "highlight", content: "vivid" },
                { type: "text", content: " or " },
                { type: "highlight", content: "natural" },
                {
                  type: "text",
                  content:
                    ". Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images. This param is only supported for ",
                },
                { type: "highlight", content: "dall-e-3" },
                { type: "text", content: "." },
              ]}
              onChange={handleChange}
            />
          )}
        <Input
          type="text"
          name="user"
          value={user.value}
          label="User"
          required={false}
          helpers={[
            {
              type: "text",
              content:
                "A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. ",
            },
            {
              type: "anchor",
              content: "Learn more",
              link:
                "https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids",
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
          onClick={handleCreateClick}
        >
          Create image
        </Button>
      </div>
    </Form>
  );
}
