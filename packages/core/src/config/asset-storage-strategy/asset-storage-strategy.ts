import { Request } from 'express';
import { Stream } from 'stream';

/**
 * @description
 * The AssetPersistenceStrategy determines how Asset files are physically stored
 * and retrieved.
 *
 * @docsCategory assets
 */
export interface AssetStorageStrategy {
    /**
     * @description
     * Writes a buffer to the store and returns a unique identifier for that
     * file such as a file path or a URL.
     */
    writeFileFromBuffer(fileName: string, data: Buffer): Promise<string>;

    /**
     * @description
     * Writes a readable stream to the store and returns a unique identifier for that
     * file such as a file path or a URL.
     */
    writeFileFromStream(fileName: string, data: Stream): Promise<string>;

    /**
     * @description
     * Reads a file based on an identifier which was generated by the a writeFile
     * method, and returns the as a Buffer.
     */
    readFileToBuffer(identifier: string): Promise<Buffer>;

    /**
     * @description
     * Reads a file based on an identifier which was generated by the a writeFile
     * method, and returns the file as a Stream.
     */
    readFileToStream(identifier: string): Promise<Stream>;

    /**
     * @description
     * Deletes a file from the storage.
     */
    deleteFile(identifier: string): Promise<void>;

    /**
     * @description
     * Check whether a file with the given name already exists. Used to avoid
     * naming conflicts before saving the file.
     */
    fileExists(fileName: string): Promise<boolean>;

    /**
     * @description
     * Convert an identifier as generated by the writeFile... methods into an absolute
     * url (if it is not already in that form). If no conversion step is needed
     * (i.e. the identifier is already an absolute url) then this method
     * should not be implemented.
     */
    toAbsoluteUrl?(reqest: Request, identifier: string): string;
}
