import type { Api } from "../apiManifest.ts";
import createSpeechFormManifest from "./createSpeechFormManifest.ts";
import createTranscriptionFormManifest from "./createTranscriptionFormManifest.ts";
import createTranslationFormManifest from "./createTranslationFormManifest.ts";

interface FieldDescriptionText {
    type: "text";
    content: string;
}

interface FieldDescriptionAnchor {
    type: "anchor";
    content: string;
    url: string;
}

interface FieldDescriptionHighlight {
    type: "highlight";
    content: string;
}

type FieldDescription =
    | FieldDescriptionText
    | FieldDescriptionAnchor
    | FieldDescriptionHighlight;

interface FieldSelectOption {
    name: string;
    value: string;
}

interface FieldSelect {
    name: string;
    label: string;
    value: string;
    description: FieldDescription[];
    type: "select";
    required: boolean;
    options: FieldSelectOption[];
}

interface FieldText {
    name: string;
    label: string;
    description: FieldDescription[];
    type: "text";
    required: boolean;
}

interface FieldTextarea {
    name: string;
    label: string;
    description: FieldDescription[];
    type: "textarea";
    required: boolean;
}

interface FieldNumber {
    name: string;
    label: string;
    value: string;
    description: FieldDescription[];
    type: "number";
    required: boolean;
}

interface FieldFile {
    name: string;
    label: string;
    description: FieldDescription[];
    type: "file";
    accept: string;
    required: boolean;
}

type Field = FieldSelect | FieldText | FieldTextarea | FieldNumber | FieldFile;

export interface Form {
    category: string;
    name: string;
    slug: string;
    api: Api["name"];
    heading: string;
    description: string;
    doc: string;
    fields: Field[];
}

const formManifest: Form[] = [
    createSpeechFormManifest,
    createTranscriptionFormManifest,
    createTranslationFormManifest,
];

export default formManifest;
