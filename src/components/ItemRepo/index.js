import { ItemContainer } from "./styles"

export const ItemRepo = ({repo, handleRemoveRepo}) => {
    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    }
    return (        
        <ItemContainer onClick={handleRemove}>            
            <h3>
                {repo.name} 
            </h3>
            <p>
                {repo.full_name}
            </p>
            <a href={repo.html_url} target="_target">Ver repositório</a>
            <br />
            <a href="#" rel="noreferrer" className="remover">Remover</a>
            <hr />
        </ItemContainer>
    )
}