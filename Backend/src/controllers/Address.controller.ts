import { Controller } from "../types/controller.js";
import addressModel from "../models/Address.model.js";
import AppError from "../utils/AppError.js";
import AddressModel from "../models/Address.model.js";





export const createAddress: Controller = async (req: any, res, next) => {

  try {
    const addressCount = await addressModel.countDocuments({
      user: req.user.id,
    });


    

    const  isDefault= addressCount === 0 ? true : req.body.isDefault;



    if (isDefault) {
      await addressModel.updateMany(
        {
          user: req.user.id,
          isDefault: true,
        },
        {
          isDefault: false,
        },
      );
    }

    const address = await addressModel.create({
      user: req.auth.userId,
      fullName: req.body.fullName,
      phone: req.body.phone,
      city: req.body.city,
      area: req.body.area,
      address: req.body.address,
      label: req.body.label,
      isDefault: isDefault,
      isActive: true,
    });

    res.status(201).json({
      success: true,
      message: "Address created successfully.",
      address,
    });
  } catch (error) {
    next(error);
  }
};





export const getUserAddresses: Controller = async (
    req:any,
    res:any,
    next:any
) => {
    try {
        const user = req.user ;

        if (!user) {
           throw new AppError("Unauthorized Access" , 401)
        }



        const addresses = await addressModel.find({
            user : user.id,
            isActive: true
        }).sort({
            isDefault: -1,
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            message: "Addresses fetched successfully.",
            data: addresses
        });


        

    } catch (error) {
        next(error);
    }
};
