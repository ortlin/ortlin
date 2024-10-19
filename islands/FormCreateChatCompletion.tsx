import { useSignal } from "@preact/signals";
import Input from "../components/Input.tsx";
import Select from "../components/Select.tsx";
import { WandSparkles } from "lucide-preact";
import { Button } from "../components/Button.tsx";
import Form from "../components/Form.tsx";
import File from "./File.tsx";
import Textarea from "../components/Textarea.tsx";

export default function FormCreateChatCompletion() {
    const prompt = useSignal("");
    const image = useSignal<File | null>(null);
    const model = useSignal("dall-e-2");
    const temperature = useSignal("1");
    const user = useSignal("");

    const handleChange = (name: string, value: string) => {
        if (name === "prompt") prompt.value = value;
        else if (name === "model") model.value = value;
        else if (name === "temperature") temperature.value = value;
        else if (name === "user") user.value = value;
    };

    const handleFileChange = (name: string, value: File | null) => {
        if (name === "image") image.value = value;
    };

    const handleCreateClick = async () => {
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
                            content: "The text contents of the message.",
                        },
                    ]}
                    onChange={handleChange}
                />
                <File
                    accept=".png"
                    name="image"
                    label="Image"
                    required={false}
                    helpers={[
                        {
                            type: "text",
                            content: "The image content of the message.",
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
                        { title: "gpt-4o", value: "gpt-4o" },
                        { title: "gpt-4o-mini", value: "gpt-4o-mini" },
                        { title: "gpt-4", value: "gpt-4" },
                        { title: "gpt-3.5-turbo", value: "gpt-3.5-turbo" },
                    ]}
                    helpers={[
                        {
                            type: "text",
                            content: "ID of the model to use. See the ",
                        },
                        {
                            type: "anchor",
                            content: "model endpoint compatibility",
                            link:
                                "https://platform.openai.com/docs/models/model-endpoint-compatibility",
                        },
                        {
                            type: "text",
                            content:
                                " table for details on which models work with the Chat API.",
                        },
                    ]}
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
                                "What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.",
                        },
                    ]}
                    onChange={handleChange}
                />
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
                    Create chat completion
                </Button>
            </div>
        </Form>
    );
}
