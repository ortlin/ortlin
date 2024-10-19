import PageWrapper from "../../components/PageWrapper.tsx";
import CreateImageForm from "../../islands/CreateImageForm.tsx";

export default function CreateImage() {
  return (
    <PageWrapper
      heading="Create image"
      description="Creates an image given a prompt."
      docUrl="https://platform.openai.com/docs/api-reference/images/create"
    >
      <CreateImageForm />
    </PageWrapper>
  );
}
