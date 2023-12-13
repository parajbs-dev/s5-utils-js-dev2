/// <reference types="node" resolution-mode="require"/>
import { Buffer } from "buffer";
/**
 * Converts a number into a Buffer representation with a specified buffer size.
 * Any leading zero bytes are removed from the Buffer.
 * @param value1 The number to be converted into a Buffer.
 * @param bufferSize The size of the Buffer to be created.
 * @returns A Buffer containing the converted value.
 */
export declare function numToBuf(value1: number, bufferSize: number): Buffer;
/**
 * Converts a portion of a Buffer to a signed integer.
 * @param buffer The Buffer containing the bytes to read from.
 * @returns The signed integer value obtained from the Buffer.
 */
export declare function bufToNum(buffer: Buffer): number;
/**
 * Encodes a CID (Content Identifier) with a prefix "z" using base58btc-encoding.
 * @param bytes The Uint8Array object representing the Bitcoin address.
 * @returns The Cid with the prefix "z".
 */
export declare function encodeCIDWithPrefixZ(bytes: Uint8Array): string;
/**
 * Decodes a CID (Content Identifier) with a prefix 'z' if present.
 * @param cid - The CID to decode.
 * @returns A Uint8Array containing the decoded CID.
 * @throws Error if the input address is invalid.
 */
export declare function decodeCIDWithPrefixZ(cid: string): Uint8Array;
/**
 * Encodes a CID (Content Identifier) with a "u" prefix using base64url-encoding.
 * @param bytes The input CID as a Uint8Array object.
 * @returns The encoded CID with the "u" prefix as a string.
 */
export declare function encodeCIDWithPrefixU(bytes: Uint8Array): string;
/**
 * Decodes a Content Identifier (CID) with a prefix 'u' and returns the decoded bytes as a Uint8Array.
 * @param cid The CID to decode, either prefixed with 'u' or already decoded.
 * @returns A Uint8Array containing the decoded bytes of the CID.
 * @throws Error Throws an error for an invalid 'u' CID format.
 */
export declare function decodeCIDWithPrefixU(cid: string): Uint8Array;
/**
 * Encodes the given bytes using Base32rfc-encoding and prefixes the result with 'b'.
 * @param bytes - The bytes to encode (should have a length of 38).
 * @returns The encoded string prefixed with 'b', or an empty string if the input is invalid.
 */
export declare function encodeCIDWithPrefixB(bytes: Uint8Array): string;
/**
 * Decodes a CID (Content Identifier) with a prefix 'B' or 'b' and returns the decoded bytes as a Uint8Array object.
 * If the CID starts with 'B' and contains any uppercase letters, it converts the CID to lowercase and removes the 'B' prefix.
 * If the CID starts with 'b' and contains any lowercase letters, it removes the 'b' prefix.
 * If the CID contains any lowercase letters, it converts all characters to uppercase.
 * @param cid The CID string to decode.
 * @returns The decoded CID bytes as a Uint8Array object.
 */
export declare function decodeCIDWithPrefixB(cid: string): Uint8Array;
/**
 * Converts a Base58btc-encoded CID to a Base32rfc-encoded CID.
 * @param cid - The Base58btc-encoded CID string to convert.
 * @returns The Base32rfc-encoded CID string.
 */
export declare function convertB58btcToB32rfcCid(cid: string): string;
/**
 * Converts a Base32rfc-encoded CID to a Base58btc-encoded CID.
 * @param cid - The Base32rfc-encoded CID to convert.
 * @returns The Base58btc-encoded CID.
 */
export declare function convertB32rfcToB58btcCid(cid: string): string;
/**
 * Converts a base64URL-encoded CID to a base58btc-encoded CID.
 * @param cid The base64URL-encoded CID to convert.
 * @returns The base58btc-encoded CID.
 */
export declare function convertB64urlToB58btcCid(cid: string): string;
/**
 * Converts a base58btc-encoded CID (Content Identifier) to a base64url-encoded CID.
 * @param cid - The base58btc-encoded CID to be converted.
 * @returns The base64url-encoded CID with a 'u' prefix.
 */
export declare function convertB58btcToB64urlCid(cid: string): string;
/**
 * Converts a base64url-encoded CID to a base32rfc-encoded CID.
 * @param cid The base64url-encoded CID to convert.
 * @returns The base32rfc-encoded CID.
 */
export declare function convertB64urlToB32rfcCid(cid: string): string;
/**
 * Converts a base32rfc-encoded CID to a base64url-encoded CID.
 * @param cid - The base32rfc-encoded CID to be converted.
 * @returns The base64url-encoded CID.
 */
export declare function convertB32rfcToB64urlCid(cid: string): string;
/**
 * Converts the download directory input CID into a different format based on certain conditions.
 * @param cid - The input CID to be converted.
 * @returns The converted CID.
 * @throws Error if the input CID is invalid or cannot be converted.
 */
export declare function convertDownloadDirectoryInputCid(cid: string): string;
//# sourceMappingURL=tools.d.ts.map