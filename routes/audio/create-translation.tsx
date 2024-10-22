import PageWrapper from "../../components/PageWrapper.tsx";
import FormCreateTranslation from "../../islands/FormCreateTranslation.tsx";

export default function CreateTranslation() {
  return (
    <PageWrapper
      heading="Create translation"
      description="Translates audio into English."
      docUrl="https://platform.openai.com/docs/api-reference/audio/createTranslation"
    >
      <FormCreateTranslation />
    </PageWrapper>
  );
}
