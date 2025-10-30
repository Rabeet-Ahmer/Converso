import CompanionsList from "@/components/CompanionsList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  getUserCompanions,
  getUserSessions,
} from "@/lib/actions/companion.actions";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const Profile = async () => {
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  const companions = await getUserCompanions(user?.id);
  const sessionHistory = await getUserSessions(user?.id);

  return (
    <main className="min-lg:w-3/4">
      <section className="flex justify-between gap-4 max-sm:flex-col max-sm:items-start">
        <div className="flex gap-4 items-center">
          <Image
            src={user.imageUrl}
            alt={user.firstName!}
            width={110}
            height={110}
            className="max-sm:w-16 max-sm:h-16"
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-2xl max-sm:text-xl">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-sm text-muted-foreground max-sm:text-xs break-all">
              {user.emailAddresses[0].emailAddress}
            </p>
          </div>
        </div>
        <div className="flex gap-4 max-sm:w-full max-sm:justify-between">
          <div className="border border-black rounded-lg p-3 gap-2 flex flex-col h-fit max-sm:flex-1">
            <div className="flex items-center gap-2">
              <Image
                src={"/icons/check.svg"}
                alt="checkmark"
                width={22}
                height={22}
                className="max-sm:w-5 max-sm:h-5"
              />
              <p className="text-2xl font-bold max-sm:text-xl">{sessionHistory.length}</p>
            </div>
            <div className="max-sm:text-sm">Lessons completed</div>
          </div>
          <div className="border border-black rounded-lg p-3 gap-2 flex flex-col h-fit max-sm:flex-1">
            <div className="flex items-center gap-2">
              <Image
                src={"/icons/cap.svg"}
                alt="checkmark"
                width={22}
                height={22}
                className="max-sm:w-5 max-sm:h-5"
              />
              <p className="text-2xl font-bold max-sm:text-xl">{companions.length}</p>
            </div>
            <div className="max-sm:text-sm">Companions created</div>
          </div>
        </div>
      </section>

      <Accordion type="multiple">
        <AccordionItem value="recent">
          <AccordionTrigger className="text-2xl font-bold max-sm:text-lg">
            {" "}
            Recent Sessions ({sessionHistory.length})
          </AccordionTrigger>
          <AccordionContent>
            <CompanionsList
              title="Recent Sessions"
              companions={sessionHistory}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="companions">
          <AccordionTrigger className="text-2xl font-bold max-sm:text-lg">
            My Companions ({companions.length})
          </AccordionTrigger>
          <AccordionContent>
            <CompanionsList 
            title="My Companions" companions={companions} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};

export default Profile;
