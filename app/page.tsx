import dynamic from "next/dynamic"

const ISOLanding = dynamic(
  () => import("@/components/ui/landing-page").then((m) => m.ISOLanding),
  { ssr: false }
)

export default function Page() {
  return <ISOLanding />
}
