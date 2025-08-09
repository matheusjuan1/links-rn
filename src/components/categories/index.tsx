import { FlatList } from "react-native";

import { styles } from "./styles";
import { categories } from "@/utils/categories";

import { Category } from "@/components/category";


export function Categories() {
    return (
        <FlatList
            style={styles.container}
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Category name={item.name} icon={item.icon} isSelected={false} />}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
            horizontal
        />
    )
}