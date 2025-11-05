import { useLoaderData, useSearchParams } from 'react-router-dom';
import CharactersList from '../components/CharactersList.jsx'
import NumberOfCharacters from '../components/NumberOfCharacters.jsx';
import { DEFAULT_FILTER, DEFAULT_ORDER } from '../api/characters-api.js';

const CharactersPage = () => {
    // change the title of the page
    document.title = "Characters | Marvel App";

    // Get the list of characters from the loader
    const characters = useLoaderData();

    // Read and update the query params so the UI reflects the current order/filter.
    // useSearchParams returns [URLSearchParams, setSearchParams]
    const [searchParams, setSearchParams] = useSearchParams();

    const currentOrderBy = searchParams.get('orderBy') || DEFAULT_FILTER;
    const currentOrder = searchParams.get('order') || DEFAULT_ORDER;

    function updateParam(key, value) {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set(key, value);
        setSearchParams(newParams);
    }

    return (
    <div>
        <header>
            <h2>Marvel Characters</h2>
        </header>
        
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'center', width: '100%', marginBottom: 12 }}>
            <label>
                Filter:
                <select
                    aria-label="orderBy"
                    value={currentOrderBy}
                    onChange={(e) => updateParam('orderBy', e.target.value)}
                    style={{ marginLeft: 8 }}
                >
                    {/* Keep default options and include "modified" as requested */}
                    <option value={DEFAULT_FILTER}>{DEFAULT_FILTER}</option>
                    <option value="modified">modified</option>
                </select>
            </label>

            <label>
                Order:
                <select
                    aria-label="order"
                    value={currentOrder}
                    onChange={(e) => updateParam('order', e.target.value)}
                    style={{ marginLeft: 8 }}
                >
                    <option value="asc">asc</option>
                    <option value="desc">desc</option>
                </select>
            </label>
        </div>

        <CharactersList list={characters} />
        <br />
        <NumberOfCharacters characters={characters} />
    </div>
  );
}

export default CharactersPage;
