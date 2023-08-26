
import getWikiResult from "@/lib/getWikiResult"
import type { Metadata } from "next"
import Item from "./components/Item"

type Props = {
    params : {
        searchTerm : string
    }
}

export async function generateMetadata({ params : { searchTerm } } : Props) : Promise<Metadata> {
    const wikiData : SearchResult = await getWikiResult(searchTerm)

    const displayTerm = searchTerm.replaceAll("%20", ' ');

    if(!wikiData?.query?.pages) {
        return {
            title : `${displayTerm} not found`
        }
    }

    return {
        title : `${displayTerm}`,
        description : `Search results for ${displayTerm}`
    }

}

const SearchResult = async ({ params } : Props) => {

    const wikiData : SearchResult = await getWikiResult(params.searchTerm)

    const results : Result[] | undefined = wikiData?.query?.pages;


    if(!results) {
        return <main>
            <h2>Ooops {params.searchTerm} not Found</h2>
        </main>
    }

    return <main className="space-y-5">
        {
            Object.values(results).map(result => <Item key={result.index} result={result} />)
        }
    </main>
}

export default SearchResult