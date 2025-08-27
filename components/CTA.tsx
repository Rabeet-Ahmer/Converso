import Image from "next/image"
import Link from "next/link"

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way</div>
      <h2 className="text-3xl font-bold">Build a Personalized Learning Companion</h2>
      <p>Pick a name, subject, voice, & personality — and start learning through voice conversations that feel natural and fun.</p>
      <Image src={"/images/cta.svg"} alt="cta" width={400} height={300}/>
      <button className="btn-primary">
        <Image src={"/icons/plus.svg"} alt="plus" width={12} height={12} />
        <Link href={"/companions/new"}>
        Build a new companion
        </Link>
      </button>
    </section>
  )
}

export default CTA