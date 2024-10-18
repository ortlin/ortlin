import PageWrapper from "../../components/PageWrapper.tsx";
import CreateTranslationForm from "../../islands/CreateTranslationForm.tsx";

export default function CreateTranslation() {
  return (
    <PageWrapper
      heading="Create translation"
      description="Translates audio into English."
      docUrl="https://platform.openai.com/docs/api-reference/audio/createTranslation"
    >
      <CreateTranslationForm />
    </PageWrapper>
  );
}
