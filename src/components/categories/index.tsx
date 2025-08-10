import { FlatList } from "react-native";

import { styles } from "./styles";
import { categories } from "@/utils/categories";

import { Category } from "@/components/category";

type Props = {
    selected: string,
    onChange: (categoryId: string) => void
}

export function Categories({ selected, onChange }: Props) {
    return (
        <FlatList
            style={styles.container}
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
                <Category
                    name={item.name}
                    icon={item.icon}
                    isSelected={item.id === selected}
                    onPress={() => onChange(item.id)} />}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
            horizontal
        />
    )
}