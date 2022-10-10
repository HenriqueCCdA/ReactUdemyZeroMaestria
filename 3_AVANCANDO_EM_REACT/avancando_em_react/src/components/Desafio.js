import React from 'react'

const UserDetails = ({name, job, age}) => {
  return (
    <>
      <h2>Nome: {name}</h2>
      <p>Profissão : {job}</p>
      <p>Idade : {age}</p>
      <p>{age >= 18 ? 'Pode tirar a carteira': ''}</p>
    </>
  )
}

export default UserDetails
