import PageWrapper from "../../components/PageWrapper.tsx";
import FormCreateImageVariation from "../../islands/FormCreateImageVariation.tsx";

export default function CreateImageVariation() {
  return (
    <PageWrapper
      heading="Create image variation"
      description="Creates a variation of a given image."
      docUrl="https://platform.openai.com/docs/api-reference/images/createVariation"
    >
      <FormCreateImageVariation />
    </PageWrapper>
  );
}
