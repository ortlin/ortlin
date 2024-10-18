import PageWrapper from "../../components/PageWrapper.tsx";
import CreateModerationForm from "../../islands/CreateModerationForm.tsx";

export default function CreateModeration() {
  return (
    <PageWrapper
      heading="Create moderation"
      description="Classifies if text and/or image inputs are potentially harmful."
      docUrl="https://platform.openai.com/docs/api-reference/moderations/create"
    >
      <CreateModerationForm />
    </PageWrapper>
  );
}