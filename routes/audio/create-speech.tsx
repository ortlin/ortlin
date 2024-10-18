import PageWrapper from "../../components/PageWrapper.tsx";
import FormCreateSpeech from "../../islands/FormCreateSpeech.tsx";

export default function Greet() {
  return (
    <PageWrapper
      heading="Create Speech"
      description="Generates audio from the input text."
      docUrl="https://platform.openai.com/docs/api-reference/audio/createSpeech"
    >
      <FormCreateSpeech />
    </PageWrapper>
  );
}
