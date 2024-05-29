"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import _ from 'lodash'

export interface ITheme {
    [key: string]: {
        primary: string
        secondary: string
        tertiary: string
        positive: string
        negative: string
        transparent_8: string
        transparent_7: string
        transparent_6: string
        transparent_5: string
        transparent_4: string
        transparent_3: string
        transparent_2: string
        transparent_1: string
        transparent_08: string
        transparent_05: string
        tooltip: string
        [key: string]: any
    }
}

const ThemeContext = createContext<any>({})

const ThemeProviderContainer = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState("light")

    useEffect(() => {
        setTheme(localStorage.getItem("@theme") || "light")
    }, [])

    useEffect(() => {
        localStorage.setItem("@theme", theme)
    }, [theme])

    const THEME_CONTENT: ITheme = {
        light: {
            primary: "#fff",
            secondary: "#5869da",
            tertiary: "#629dfd33",
            positive: "#65c965",
            negative: "#FF334E",
            transparent_8: "#000000cc",
            transparent_7: "#000000b3",
            transparent_6: "#00000099",
            transparent_5: "#00000080",
            transparent_4: "#00000066",
            transparent_3: "#0000004d",
            transparent_2: "#00000033",
            transparent_1: "#0000001a",
            transparent_08: "#00000014",
            transparent_05: "#0000000d",
            tooltip: "#f2f2f2"
        },
        dark: {
            primary: "#333",
            secondary: "#5869da",
            tertiary: "#629dfd33",
            positive: "#65c965",
            negative: "#FF334E",
            transparent_8: "#ffffffcc",
            transparent_7: "#ffffffb3",
            transparent_6: "#ffffff99",
            transparent_5: "#ffffff80",
            transparent_4: "#ffffff66",
            transparent_3: "#ffffff4d",
            transparent_2: "#ffffff33",
            transparent_1: "#ffffff1a",
            transparent_08: "#ffffff14",
            transparent_05: "#ffffff0d",
            tooltip: "#3d3d3d"
        }
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                content: THEME_CONTENT[theme]
            }}
        >
            <ThemeProvider theme={THEME_CONTENT[theme]}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext)

export { ThemeProviderContainer as ThemeProvider, useTheme }
