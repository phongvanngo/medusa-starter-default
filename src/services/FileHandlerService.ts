
import { AbstractFileService, FileServiceGetUploadStreamResult, FileServiceUploadResult, GetUploadedFileType, UploadStreamDescriptorType } from "@medusajs/medusa";
import * as fs from 'fs';
import { MedusaError } from "medusa-core-utils";
import * as path from "path";
import axios from "axios";


const FormData = require("form-data");

const options = {
    baseUrl: process.env.IMAGE_SERVICE_BASE_URL
}

class NovafileService extends AbstractFileService {
    async upload(
        fileData: Express.Multer.File
    ): Promise<FileServiceUploadResult> {
        const destinationPath = 'public/static';

        return new Promise(async (resolve, reject) => {
            if (!fs.existsSync(destinationPath)) {
                fs.mkdirSync(destinationPath, { recursive: true });
            }

            const formData = new FormData();
            formData.append('file', fs.createReadStream(fileData.path), fileData.originalname);

            const response = await axios.post(`${options.baseUrl}/api/upload/single/product/images`, formData, {
                headers: formData.getHeaders()
            });

            resolve({
                url: response.data.data.url
            })
        })



    }

    async uploadProtected(
        fileData: Express.Multer.File
    ): Promise<FileServiceUploadResult> {
        throw new MedusaError(
            MedusaError.Types.UNEXPECTED_STATE,
            "Please add a file service plugin in order to manipulate files in Medusa"
        )
    }
    async delete(fileData: Record<string, any>): Promise<void> {
        throw new MedusaError(
            MedusaError.Types.UNEXPECTED_STATE,
            "Please add a file service plugin in order to manipulate files in Medusa"
        )
    }
    async getUploadStreamDescriptor(
        fileData: UploadStreamDescriptorType
    ): Promise<FileServiceGetUploadStreamResult> {
        throw new MedusaError(
            MedusaError.Types.UNEXPECTED_STATE,
            "Please add a file service plugin in order to manipulate files in Medusa"
        )
    }
    async getDownloadStream(
        fileData: GetUploadedFileType
    ): Promise<NodeJS.ReadableStream> {
        throw new MedusaError(
            MedusaError.Types.UNEXPECTED_STATE,
            "Please add a file service plugin in order to manipulate files in Medusa"
        )
    }
    async getPresignedDownloadUrl(
        fileData: GetUploadedFileType
    ): Promise<string> {
        throw new MedusaError(
            MedusaError.Types.UNEXPECTED_STATE,
            "Please add a file service plugin in order to manipulate files in Medusa"
        )
    }


}

export default NovafileService
