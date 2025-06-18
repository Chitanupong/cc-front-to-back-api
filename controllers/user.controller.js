export const listUser = (req,res)=>{
  res.json({message:"This is List All User"});
}
export const readUser = (req,res) => {
  res.json({message:"This is Read User"})
}
export const createUser = (req,res)=>{
  res.json({message:"This is POST User"})
}
export const updateUser = (req,res)=>{
  res.json({message:"This is PATCH User"})
}
export const deleteUser = (req,res)=>{
  res.json({message:"This is DELETE User"})
}