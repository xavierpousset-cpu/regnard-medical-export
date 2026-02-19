/**
 * Page Questionnaire - Regnard Medical
 * Formulaire Tally en plein écran
 * URL: /questionnaire
 */

export default function Questionnaire() {
  return (
    <div className="w-full h-screen bg-background">
      <iframe
        src="https://tally.so/r/ZjN5py?transparentBackground=1"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Amélioration de la prise en charge du confort intestinal en EHPAD"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          border: "none",
        }}
      />
    </div>
  );
}
