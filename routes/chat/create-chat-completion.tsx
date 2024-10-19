import PageWrapper from "../../components/PageWrapper.tsx";
import FormCreateChatCompletion from "../../islands/FormCreateChatCompletion.tsx";

export default function CreateChatCompletion() {
  return (
    <PageWrapper
      heading="Create chat completion"
      description="Creates a model response for the given chat conversation."
      docUrl="https://platform.openai.com/docs/api-reference/chat/create"
    >
      <FormCreateChatCompletion />
    </PageWrapper>
  );
}
