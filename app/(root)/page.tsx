import { UserButton } from "@clerk/nextjs";

const  LandingPage = () => {
  return (
    <div className="p-4">
     <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default LandingPage;