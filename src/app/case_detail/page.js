'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CaseDetail() {

    const searchParams = useSearchParams();
    const { id } = searchParams.get('id');
    useEffect(() => {
        console.log('jb', id)
    }, [])
    return (
        <>
            detail {id}
        </>
    )
}