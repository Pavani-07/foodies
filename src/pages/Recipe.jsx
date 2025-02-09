import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setactiveTab] = useState("instructions");

  useEffect(()=>{
    fetchDetails();
  },[params.name]);

  const fetchDetails = async()=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  }

  

  return (
    <DetailWrapper>
      <div>
        <h3>{details.title}</h3>
        <img src={details.image} alt=""></img>
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={()=>setactiveTab("instructions")}>
          Instructions
        </Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={()=>setactiveTab("ingredients")}>
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
          <h4 dangerouslySetInnerHTML={{ __html: details.summary}}></h4>
          <h4 dangerouslySetInnerHTML={{ __html: details.instructions}}></h4>
        </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
          {details.extendedIngredients.map((ingredient)=>(
            <h4><li key={ingredient.id}>{ingredient.original}</li></h4>
          ))}
        </ul>
        )}
        
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
background: #eff3e2;
  margin-top:10rem;
  margin-bottom:5rem;
  display:flex;
  .active{
    background: linear-gradient(to right, #DBA979, #DBA939);
    color: #365E32;
  }
  h4{
    line-height: 2;
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size:1rem;
    line-height:2.5rem;
  }
  ul{
    margin-top:2rem;
  }
`;

const Button = styled.button`
  padding :1rem 2rem;
  color:#365E32;
  background:linear-gradient(37deg, #AFD198, #AFD148);
  border: 2px solid #365E32;
  margin-right:2rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 2.2rem;
`
const Info = styled.div`
  margin-left : 10rem;
`

export default Recipe;