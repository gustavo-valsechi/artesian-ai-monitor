"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import _ from 'lodash'

const TooltipContext = createContext<any>({})

const TooltipProviderContainer = ({ children }: { children: React.ReactNode }) => {

    const pathname = usePathname()

    const [reload, setReload] = useState<any>(0)
    const [tooltips, setTooltips] = useState<any>([])

    const reloadTooltip = () => {
        setReload(reload + 1)
    }

    const getContent = (target: any) => {
        const rect = target.getBoundingClientRect()

        return {
            top: rect.top + window.scrollY + target.offsetHeight + 8,
            left: rect.left + window.scrollX + (target.offsetWidth / 2),
            content: target.dataset?.tooltip || ""
        }
    }

    useEffect(() => {
        const elements = document.querySelectorAll("[data-tooltip]")

        _.forEach(elements, (element) => {
            element.addEventListener("mouseenter", (event: any) => {
                const target = event?.target

                if (!target) return

                setTooltips(_.concat(tooltips, [getContent(target)]))
            })

            element.addEventListener("mouseleave", (event: any) => {
                const target = event?.target

                if (!target) return

                setTooltips(_.filter(tooltips, (data) => JSON.stringify(data) === JSON.stringify(getContent(target))))
            })
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, reload])

    return (
        <TooltipContext.Provider
            value={{
                tooltips,
                reload: reloadTooltip
            }}
        >
            {_.map(tooltips, (data, index) =>
                <div
                    key={index}
                    className="tooltip-container"
                    style={{
                        top: data.top,
                        left: data.left,
                    }}
                >
                    {data.content}
                </div>
            )}
            {children}
        </TooltipContext.Provider>
    )
}

const useTooltip = () => useContext(TooltipContext)

export { TooltipProviderContainer as TooltipProvider, useTooltip }
