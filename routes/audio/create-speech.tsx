import { useSignal } from "@preact/signals";
import Input from "../../components/Input.tsx";
import Select from "../../components/Select.tsx";
import Textarea from "../../components/Textarea.tsx";
import PageWrapper from "../../components/PageWrapper.tsx";
import { WandSparkles } from "lucide-preact";
import { Button } from "../../components/Button.tsx";

export default function Greet() {
  const model = useSignal("");
  const input = useSignal("");
  const voice = useSignal("");
  const speed = useSignal("1");

  const handleChange = (name: string, value: string) => {
    if (name === "model") model.value = value;
    else if (name === "input") input.value = value;
    else if (name === "voice") voice.value = value;
    else if (name === "speed") speed.value = value;
  };

  const handleCreateClick = () => {
    // TODO
  };

  return (
    <PageWrapper
      heading="Create Speech"
      description="Generates audio from the input text."
    >
      <Select
        value={model.value}
        label="Model"
        required={true}
        name="model"
        options={[
          { title: "tts-1", value: "tts-1" },
          { title: "tts-1-hd", value: "tts-1-hd" },
        ]}
        helpers={[
          { type: "text", content: "One of the available " },
          {
            type: "anchor",
            content: "TTS models",
            link: "https://platform.openai.com/docs/models/tts",
          },
          { type: "text", content: ": " },
          { type: "highlight", content: "tts-1" },
          { type: "text", content: " or " },
          { type: "highlight", content: "tts-1-hd" },
        ]}
        onChange={handleChange}
      />
      <Textarea
        value={input.value}
        label="Input"
        required={true}
        name="input"
        helpers={[{
          type: "text",
          content:
            "The text to generate audio for. The maximum length is 4096 characters.",
        }]}
        onChange={handleChange}
      />
      <Select
        value={voice.value}
        label="Voice"
        required={true}
        name="voice"
        options={[
          { title: "alloy", value: "alloy" },
          { title: "echo", value: "echo" },
          { title: "fable", value: "fable" },
          { title: "onyx", value: "onyx" },
          { title: "nova", value: "nova" },
          { title: "shimmer", value: "shimmer" },
        ]}
        helpers={[
          {
            type: "text",
            content:
              "The voice to use when generating the audio. Supported voices are ",
          },
          { type: "highlight", content: "alloy" },
          { type: "text", content: ", " },
          { type: "highlight", content: "echo" },
          { type: "text", content: ", " },
          { type: "highlight", content: "fable" },
          { type: "text", content: ", " },
          { type: "highlight", content: "onyx" },
          { type: "text", content: ", " },
          { type: "highlight", content: "nova" },
          { type: "text", content: ", and " },
          { type: "highlight", content: "shimmer" },
          {
            type: "text",
            content: ". Previews of the voices are available in the ",
          },
          {
            type: "anchor",
            content: "Text to speech guide",
            link:
              "https://platform.openai.com/docs/guides/text-to-speech/voice-options",
          },
          {
            type: "text",
            content: ".",
          },
        ]}
        onChange={handleChange}
      />
      <Input
        type="number"
        name="speed"
        value={speed.value}
        label="Speed"
        required={false}
        helpers={[
          {
            type: "text",
            content: "The speed of the generated audio. Select a value from ",
          },
          { type: "highlight", content: "0.25" },
          { type: "text", content: " to " },
          { type: "highlight", content: "4.0" },
          { type: "text", content: ". " },
          { type: "highlight", content: "1.0" },
          { type: "text", content: " is the default." },
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
        Create Speech
      </Button>
    </PageWrapper>
  );
}
