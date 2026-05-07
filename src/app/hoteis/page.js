import { Suspense } from "react";
import HoteisClientPage from "./HoteisClientPage";

export default function HoteisPage() {
  return (
    <Suspense fallback={<div style={{ padding: "4rem", textAlign: "center" }}>Carregando hotéis HDS...</div>}>
      <HoteisClientPage />
    </Suspense>
  );
}