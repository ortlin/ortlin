import { useSignal } from "@preact/signals";
import Input from "../components/Input.tsx";
import Select from "../components/Select.tsx";
import { WandSparkles } from "lucide-preact";
import { Button } from "../components/Button.tsx";
import Form from "../components/Form.tsx";
import File from "./File.tsx";
import Textarea from "../components/Textarea.tsx";
import ResultImage from "../components/ResultImage.tsx";
import FieldMaskImage from "../components/FieldMaskImage.tsx";

export default function FormCreateImageEdit() {
    const image = useSignal<File | null>(null);
    const prompt = useSignal("");
    const mask = useSignal<Blob | null>(null);
    const model = useSignal("dall-e-2");
    const size = useSignal("1024x1024");
    const user = useSignal("");
    const updatedImage = useSignal("");

    const handleChange = (name: string, value: string) => {
        if (name === "prompt") prompt.value = value;
        else if (name === "model") model.value = value;
        else if (name === "size") size.value = value;
        else if (name === "user") user.value = value;
    };

    const handleFileChange = (name: string, value: File | null) => {
        if (name === "image") image.value = value;
    };

    const handleMaskImageChange = (name: string, maskImage: Blob) => {
        if (name === "mask") mask.value = maskImage;
    };

    const handleCreateClick = async () => {
        // TODO
    };

    return (
        <Form
            result={<ResultImage image={updatedImage.value} />}
        >
            <div class="grid gap-4">
                <File
                    accept=".png"
                    name="image"
                    label="Image"
                    required={true}
                    helpers={[
                        {
                            type: "text",
                            content:
                                "The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask is not provided, image must have transparency, which will be used as the mask.",
                        },
                    ]}
                    onChange={handleFileChange}
                />
                <Textarea
                    value={prompt.value}
                    label="Prompt"
                    required={true}
                    name="prompt"
                    helpers={[
                        {
                            type: "text",
                            content:
                                "A text description of the desired image(s). The maximum length is 1000 characters.",
                        },
                    ]}
                    onChange={handleChange}
                />
                {image.value && (
                    <FieldMaskImage
                        name="mask"
                        image={image.value}
                        helpers={[
                            {
                                type: "text",
                                content:
                                    "An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where ",
                            },
                            { type: "highlight", content: "image" },
                            {
                                type: "text",
                                content:
                                    " should be edited. Must be a valid PNG file, less than 4MB, and have the same dimensions as ",
                            },
                            { type: "highlight", content: "image" },
                            {
                                type: "text",
                                content: ".",
                            },
                        ]}
                        onChange={handleMaskImageChange}
                    />
                )}
                <Select
                    value={model.value}
                    label="Model"
                    required={false}
                    name="model"
                    options={[
                        { title: "dall-e-2", value: "dall-e-2" },
                    ]}
                    helpers={[
                        {
                            type: "text",
                            content:
                                "The model to use for image generation. Only ",
                        },
                        { type: "highlight", content: "dall-e-2" },
                        {
                            type: "text",
                            content: " is supported at this time.",
                        },
                    ]}
                    onChange={handleChange}
                />
                <Select
                    value={size.value}
                    label="Size"
                    required={false}
                    name="size"
                    options={[
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
                    ]}
                    helpers={[
                        {
                            type: "text",
                            content:
                                "The size of the generated images. Must be one of ",
                        },
                        { type: "highlight", content: "256x256" },
                        { type: "text", content: ", " },
                        { type: "highlight", content: "512x512" },
                        { type: "text", content: ", or " },
                        { type: "highlight", content: "1024x1024" },
                        { type: "text", content: "." },
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
                    Create image edit
                </Button>
            </div>
        </Form>
    );
}
