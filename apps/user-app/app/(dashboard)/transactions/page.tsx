import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import {PrismaClient} from "@repo/db/client";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { Metadata } from 'next'

const prisma = new PrismaClient();

export const metadata: Metadata = {
  title: 'Transactions | PayEase',
  description: 'Track all your transactions effortlessly with PayEase digital wallet application',
}

async function getsentP2PTranscations() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      fromUserId: Number(session?.user.id),
    },
  });

  return txns.map((t: any) => ({
    time: t.timeStamp,
    amount: t.amount,
    status: "success",
    provider: t.provider,
  }));
}

async function getreceivedP2PTranscations() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      toUserId: Number(session?.user.id),
    },
  });

  return txns.map((t: any) => ({
    time: t.timeStamp,
    amount: t.amount,
    status: "success",
    provider: t.provider,
  }));
}

async function getOnRampTransactions(status: any) {
  const session = await getServerSession(authOptions);
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user?.id),
      
    },
  });
  return txns.map((t: any) => ({
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider,
  }));
}

export default async function TransactionsPage() {
  const [
    sentP2PTranscations,
    receivedP2PTranscations,
    onRampTransactions,
    onRampTransactionsPending,
    onRampTransactionsFailed,
  ] = await Promise.all([
    getsentP2PTranscations(),
    getreceivedP2PTranscations(),
    getOnRampTransactions("success"),
    getOnRampTransactions("processing"),
    getOnRampTransactions("failure"),
  ]);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center md:text-4xl mt-20 font-extrabold">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
          <span className="text-blue-600">PayEase </span>Transactions
        </h1>
      </div>
      <div className="text-center mb-8 sm:mb-12">
        <p className="mt-2 text-lg sm:text-xl text-slate-800">
          Track all your transactions effortlessly
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 px-4 md:px-10 gap-3">
          <h1 className="text-2xl text-slate-800 pt-2 font-bold col-span-1 md:col-span-2">
            <span className="text-blue-600">P2P </span>Transactions
          </h1>
          <div>
            <OnRampTransactions
              title={"Sent transactions"}
              transactions={sentP2PTranscations}
            />
          </div>
          <div>
            <OnRampTransactions
              title={"Received transactions"}
              transactions={receivedP2PTranscations}
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 px-4 md:px-10 gap-3">
          <h1 className="text-2xl text-slate-800 pt-2 font-bold col-span-1 md:col-span-2">
            <span className="text-blue-600">Wallet </span>Transactions
          </h1>
          <div>
            <OnRampTransactions
              title={"Successful transactions"}
              transactions={onRampTransactions}
            />
          </div>

          <div>
            <OnRampTransactions
              title={"Processing Transactions"}
              transactions={onRampTransactionsPending}
            />
          </div>

          <div>
            <OnRampTransactions
              title={"Failure Transactions"}
              transactions={onRampTransactionsFailed}
            />
          </div>
        </div>
      </div>
    </div>
  );
}