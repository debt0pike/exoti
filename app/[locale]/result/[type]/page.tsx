import ResultClient from './ResultClient';

const types = ['aa','ab','ac','ad','ba','bb','bc','bd','ca','cb','cc','cd','da','db','dc','dd'];

export function generateStaticParams() {
  return types.map((type) => ({ type }));
}

export default function ResultPage({ params }: { params: { type: string } }) {
  return <ResultClient type={params.type} />;
}
