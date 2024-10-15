import apiManifest, { type Api } from "./apiManifest.ts";
import categoryManifest, { type Category } from "./categoryManifest.ts";
import formManifest, { type Form } from "./forms/formManifest.ts";

interface Manifest {
    categories: Category[];
    apis: Api[];
    forms: Form[];
}

const manifest: Manifest = {
    categories: categoryManifest,
    apis: apiManifest,
    forms: formManifest,
};

export default manifest;
