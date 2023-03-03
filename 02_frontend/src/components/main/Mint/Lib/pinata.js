
import algosdk from 'algosdk';
import { CID } from 'multiformats/cid';
import axios from 'axios'
import { Buffer } from 'buffer'; 
export const cidToReserveURL = (cid ) => {
  const decoded = CID.parse(cid);
  const { version } = decoded;
  const url = `template-ipfs://{ipfscid:${version}:dag-pb:reserve:sha2-256}`;
  const reserveAddress = algosdk.encodeAddress(
    Uint8Array.from(Buffer.from(decoded.multihash.digest))
  );
  return {
    url,
    reserveAddress,
  };
};
export const CIDS = [
  'QmWfgPCaSJZrD7oUe4pi41jjb1kGD2Jtbjfn2ELqCsVQ9r',
  'QmabqR9EqaxQT3Z2Z4UqGUmD38yc83AVMhVpM9Bxgjttmi',
  'QmT1ck3BziPcoyKLGe6yzkbykkcom79QQC2L9Xs9sq7iJP'
]
export const sendFileToIPFS = async (fileImg) => {
  const apiKey = process.env.REACT_APP_PINATA_API_KEY;
  const apiSecret = process.env.REACT_APP_PINATA_API_SECRET_TOKEN;


  if (fileImg) {
      try {

          const formData = new FormData();
          formData.append("file", fileImg);

          const resFile = await axios({
              method: "post",
              url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
              data: formData,
              headers: {
                  'pinata_api_key': apiKey,
                  'pinata_secret_api_key': apiSecret,
                  "Content-Type": "multipart/form-data"
              },
          });

          const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
          
          return   resFile.data.IpfsHash;
      } catch (error) {
          return "error";
          console.log("Error sending File to IPFS: ")
          console.log(error)
      }
  }
}
