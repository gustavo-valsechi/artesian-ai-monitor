import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:5000",
    // baseURL: "https://api-artesian-ai-monitor.onrender.com",
})

export * from "./alerts"
export * from "./monitor"
export * from "./motors"

export const DCredentials = {
    limit: 10,
    offset: 0,
    order: { name: "ASC" }
}

export const DPagination = {
    content: [],
    total: 0,
    totalPage: 0,
    hasNext: false
}
