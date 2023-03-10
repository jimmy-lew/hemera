import { PropertiesSchema } from "@lyrasearch/lyra/dist/types"

export { }

declare global {
    type Nullable<T> = T | null

    type SizeTypes = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
    type RoundTypes = SizeTypes
    

    type ColumnData = (string | number)[]

    interface CellData {
        data: any
        type: 'data' | 'header'
        hint?: string
        icon?: string
    }

    interface Schema extends PropertiesSchema {
        _id: 'number'
    }

    interface ISearchable {
        searchOptions: {
            type: 'command' | 'redirect'
        }
    }

    interface InputOption<T> { focus: boolean, data: T, required?: boolean }
}