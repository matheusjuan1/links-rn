import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = "linksapp@links"

export type LinkStorage = {
    id: string,
    name: string,
    url: string,
    category: string
}

/**
 * Função para pegar todos os links salvos internamente.
 * 
 * @returns Retorna um array com links, ou vazio.
 */
async function get(): Promise<LinkStorage[]> {
    const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY)
    return storage ? JSON.parse(storage) : []
}

/**
 * Função para salvar um link internamente.
 * 
 * @param link Dados do link.
 */
async function save(link: LinkStorage) {
    try {
        const storage = await get()

        await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify([...storage, link]))
    } catch (error) {
        throw error
    }
}

/**
 * Função para remover um link.
 * 
 * @param id Id do link.
 */
async function remove(id: string) {
    try {
        const storage = await get()

        const filtered = storage.filter((link) => link.id !== id)

        await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(filtered))
    } catch (error) {
        throw error
    }
}

export const linkStorage = {
    get,
    save,
    remove
}