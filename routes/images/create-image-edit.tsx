import PageWrapper from "../../components/PageWrapper.tsx";
import FormCreateImageEdit from "../../islands/FormCreateImageEdit.tsx";

export default function CreateImageEdit() {
  return (
    <PageWrapper
      heading="Create image edit"
      description="Creates an edited or extended image given an original image and a prompt."
      docUrl="https://platform.openai.com/docs/api-reference/images/createEdit"
    >
      <FormCreateImageEdit />
    </PageWrapper>
  );
}
