import { Suspense } from "react";
import ClientBranches from "./ClientBranches";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function BranchesPage() {
    return (
        <Suspense fallback={<LoadingSkeleton />}>
            <ClientBranches />
        </Suspense>
    );
}
