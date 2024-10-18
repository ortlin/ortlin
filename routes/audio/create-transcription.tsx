import PageWrapper from "../../components/PageWrapper.tsx";
import CreateTranscriptionForm from "../../islands/CreateTranscriptionForm.tsx";

export default function CreateTranscription() {
  return (
    <PageWrapper
      heading="Create transcription"
      description="Transcribes audio into the input language."
      docUrl="https://platform.openai.com/docs/api-reference/audio/createTranscription"
    >
      <CreateTranscriptionForm />
    </PageWrapper>
  );
}
