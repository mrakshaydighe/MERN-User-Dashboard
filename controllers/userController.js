import userModel from "../models/userModel.js";

export const create = async (req, res) => {
    try {
      const userData = new userModel(req.body);
  
      if (!userData) {
        return res.status(404).json({ msg: 'User data not found' });
      }
  
      const savedUser = await userData.save();
      console.log(savedUser);
      return res.status(201).json(savedUser); // Use res.status to set status code
    } catch (error) {
      return res.status(500).json({ error: error.message }); // Use res.status to set status code
    }
  };
  


export const getAllUsers = async(req,res)=>{
    try {
        const users = await userModel.find()
        if (!users){
            return res.status(404).json({msg:`users not founf`});
        }        
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error:error});
    }
}

export const getUser = async (req,res)=>{
    try {
        const _id = req.params.id;
        const user = await userModel.findById({_id});

        if(!user){
            return res.status(404).json({msg:`user not found`});
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error:error});
    }
}

export const updateUser = async(req,res)=>{
    try {
        const _id = req.params.id;
        const userExits = await userModel.findByIdAndUpdate();

        if(!userExits){
          return res.status(401).json({msg:`User not found`});
        }

        const updatedData = userExits.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(200).json(updatedData);
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const deletUser = async (req, res) => {
    try {
      const _id = req.params.id;
      const user = await userModel.findByIdAndDelete(_id);
  
      if (!user) {
        return res.status(404).json({ msg: 'Cannot delete user. User not found.' });
      }
      return res.status(200).json({ msg: 'User deleted successfully', user });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
