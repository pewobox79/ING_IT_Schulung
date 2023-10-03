import React from "react"

export type PageTypes={
    children: React.ReactNode
}

export type AddButtonTypes = {
    title?: string,
    completed?: boolean;
    type?: string,
    children?:React.ReactNode
}