import { MaterialIcons } from "@expo/vector-icons"

type Category = {
    id: string,
    name: string,
    icon: keyof typeof MaterialIcons.glyphMap
}

export const categories: Category[] = [
    { id: "1", name: "Programação", icon: "code" },
    { id: "2", name: "Mobile", icon: "phone-iphone" },
    { id: "3", name: "Back-end", icon: "language" },
    { id: "4", name: "AI & Data", icon: "memory" },
    { id: "5", name: "Idiomas", icon: "translate" }
]