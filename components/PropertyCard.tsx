import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";

const PropertyCard = (props: {
    name: string;
    description: string;
    size: string;
}) => {
    return (
        <div className="mt-6 w-96 rounded-xl border p-6 text-left">
            <h2 className="text-2xl font-bold">
                Name: {props.name}
            </h2>
            <p className="text-base">
                Description: {props.description}
            </p>
            <p className="text-base font-bold">
                Size: {props.size}
            </p>
        </div>
    )
}

export default PropertyCard;