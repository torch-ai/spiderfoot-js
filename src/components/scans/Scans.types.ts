import { TDateString, THexColor } from "../Component.types";

export type TStartScanUseCase = "all" | "Footprint" | "Investigate" | "Passive";
export interface IStartScanOptions {
  scanName: string;
  scanTarget: string;
  useCase: TStartScanUseCase;
  moduleList?: string[];
  typeList?: TDataType[];
}

export type TScanStatus =
  | "UNKNOWN"
  | "STARTING"
  | "STARTED"
  | "INITIALIZING"
  | "RUNNING"
  | "ABORT-REQUESTED"
  | "FINISHED"
  | "FAILED";
export type TScanResult = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  number
];
export interface IScan {
  id: string;
  name?: string;
  target: string;
  requested: TDateString;
  started?: TDateString;
  finished?: TDateString | "Not yet" | string;
  status: TScanStatus;
  elements: number;
}

export type TScanSummaryItemsResult = [string, string, string, number, number];
export interface IScanSummaryItems {
  type: string;
  name: string;
  lastDataElement: TDateString;
  totalElements: number;
  uniqueElements: number;
}

export type TScanEventResults = [
  string, // "2020-07-30 21:56:17"
  string, // "500px (Category: images)↵&lt;SFURL&gt;https://500px.com/petermayer&lt;/SFURL&gt;"
  string, // "petermayer"
  string, // "sfp_accounts"
  number, // 100
  number, // 100
  number, // 0
  string, // "cca1c8a2d50351380980800d7ad0a611dbd5228f19f3e529d24ec8e9f6025752"
  number, // 0
  number, // 0
  string //  "ACCOUNT_EXTERNAL_OWNED"
];
export interface IScanEventResults {
  identified: TDateString; // "2020-07-30 21:56:17"
  content: string; // "500px (Category: images)↵&lt;SFURL&gt;https://500px.com/petermayer&lt;/SFURL&gt;"
  sourceDataElement: string; // "petermayer"
  sourceModule: string; // "sfp_accounts"
  a: number; // 100
  b: number; // 100
  c: number; // 0
  id: string; // "cca1c8a2d50351380980800d7ad0a611dbd5228f19f3e529d24ec8e9f6025752"
  isFalsePositive: number; // 0
  f: number; // 0
  dataType: TDataType;
}

export type TDataType =
  | "ACCOUNT_EXTERNAL_OWNED"
  | "AFFILIATE_COMPANY_NAME"
  | "AFFILIATE_DOMAIN_NAME"
  | "AFFILIATE_DOMAIN_UNREGISTERED"
  | "AFFILIATE_DOMAIN_WHOIS"
  | "AFFILIATE_EMAILADDR"
  | "AFFILIATE_IPADDR"
  | "AFFILIATE_INTERNET_NAME"
  | "AFFILIATE_INTERNET_NAME_UNRESOLVED"
  | "AFFILIATE_INTERNET_NAME_HIJACKABLE"
  | "AFFILIATE_WEB_CONTENT"
  | "AFFILIATE_DESCRIPTION_ABSTRACT"
  | "AFFILIATE_DESCRIPTION_CATEGORY"
  | "APPSTORE_ENTRY"
  | "BGP_AS_MEMBER"
  | "BGP_AS_OWNER"
  | "BASE64_DATA"
  | "BITCOIN_ADDRESS"
  | "BITCOIN_BALANCE"
  | "BLACKLISTED_AFFILIATE_IPADDR"
  | "BLACKLISTED_IPADDR"
  | "BLACKLISTED_NETBLOCK"
  | "BLACKLISTED_SUBNET"
  | "CLOUD_STORAGE_BUCKET"
  | "CLOUD_STORAGE_BUCKET_OPEN"
  | "CO_HOSTED_SITE"
  | "CO_HOSTED_SITE_DOMAIN"
  | "CO_HOSTED_SITE_DOMAIN_WHOIS"
  | "COMPANY_NAME"
  | "PASSWORD_COMPROMISED"
  | "HASH_COMPROMISED"
  | "TARGET_WEB_COOKIE"
  | "COUNTRY_NAME"
  | "CREDIT_CARD_NUMBER"
  | "DNS_SPF"
  | "DNS_SRV"
  | "DNS_TEXT"
  | "DARKNET_MENTION_URL"
  | "DARKNET_MENTION_CONTENT"
  | "DATE_HUMAN_DOB"
  | "DEFACED_INTERNET_NAME"
  | "DEFACED_AFFILIATE_INTERNET_NAME"
  | "DEFACED_AFFILIATE_IPADDR"
  | "DEFACED_COHOST"
  | "DEFACED_IPADDR"
  | "DESCRIPTION_ABSTRACT"
  | "DESCRIPTION_CATEGORY"
  | "DEVICE_TYPE"
  | "DOMAIN_NAME"
  | "DOMAIN_NAME_PARENT"
  | "DOMAIN_REGISTRAR"
  | "DOMAIN_WHOIS"
  | "EMAILADDR"
  | "EMAILADDR_GENERIC"
  | "PROVIDER_MAIL"
  | "ERROR_MESSAGE"
  | "ETHEREUM_ADDRESS"
  | "PROVIDER_JAVASCRIPT"
  | "WEBSERVER_HTTPHEADERS"
  | "HTTP_CODE"
  | "ACCOUNT_EXTERNAL_OWNED_COMPROMISED"
  | "EMAILADDR_COMPROMISED"
  | "ACCOUNT_EXTERNAL_USER_SHARED_COMPROMISED"
  | "HASH"
  | "INTERESTING_FILE_HISTORIC"
  | "URL_PASSWORD_HISTORIC"
  | "URL_UPLOAD_HISTORIC"
  | "URL_FORM_HISTORIC"
  | "URL_STATIC_HISTORIC"
  | "URL_FLASH_HISTORIC"
  | "URL_JAVA_APPLET_HISTORIC"
  | "URL_JAVASCRIPT_HISTORIC"
  | "URL_WEB_FRAMEWORK_HISTORIC"
  | "PROVIDER_HOSTING"
  | "HUMAN_NAME"
  | "IBAN_NUMBER"
  | "IP_ADDRESS"
  | "IPV6_ADDRESS"
  | "INTERESTING_FILE"
  | "ROOT"
  | "INTERNET_NAME"
  | "INTERNET_NAME_UNRESOLVED"
  | "JUNK_FILE"
  | "LEAKSITE_CONTENT"
  | "LEAKSITE_URL"
  | "LINKED_URL_EXTERNAL"
  | "LINKED_URL_INTERNAL"
  | "MALICIOUS_ASN"
  | "MALICIOUS_AFFILIATE_INTERNET_NAME"
  | "MALICIOUS_AFFILIATE_IPADDR"
  | "MALICIOUS_COHOST"
  | "MALICIOUS_EMAILADDR"
  | "MALICIOUS_IPADDR"
  | "MALICIOUS_NETBLOCK"
  | "MALICIOUS_SUBNET"
  | "MALICIOUS_INTERNET_NAME"
  | "MALICIOUS_PHONE_NUMBER"
  | "PROVIDER_DNS"
  | "NETBLOCK_MEMBER"
  | "NETBLOCK_OWNER"
  | "NETBLOCK_WHOIS"
  | "WEBSERVER_STRANGEHEADER"
  | "TCP_PORT_OPEN"
  | "TCP_PORT_OPEN_BANNER"
  | "UDP_PORT_OPEN"
  | "UDP_PORT_OPEN_INFO"
  | "OPERATING_SYSTEM"
  | "PGP_KEY"
  | "PHONE_NUMBER"
  | "PHYSICAL_ADDRESS"
  | "PHYSICAL_COORDINATES"
  | "GEOINFO"
  | "PUBLIC_CODE_REPO"
  | "RAW_DNS_RECORDS"
  | "RAW_RIR_DATA"
  | "RAW_FILE_META_DATA"
  | "SSL_CERTIFICATE_ISSUER"
  | "SSL_CERTIFICATE_ISSUED"
  | "SSL_CERTIFICATE_RAW"
  | "SSL_CERTIFICATE_EXPIRED"
  | "SSL_CERTIFICATE_EXPIRING"
  | "SSL_CERTIFICATE_MISMATCH"
  | "SEARCH_ENGINE_WEB_CONTENT"
  | "SIMILARDOMAIN"
  | "SIMILARDOMAIN_WHOIS"
  | "SOCIAL_MEDIA"
  | "SOFTWARE_USED"
  | "PROVIDER_TELCO"
  | "URL_PASSWORD"
  | "URL_UPLOAD"
  | "URL_ADBLOCKED_EXTERNAL"
  | "URL_ADBLOCKED_INTERNAL"
  | "URL_FORM"
  | "URL_STATIC"
  | "URL_FLASH"
  | "URL_JAVA_APPLET"
  | "URL_JAVASCRIPT"
  | "URL_WEB_FRAMEWORK"
  | "USERNAME"
  | "VULNERABILITY"
  | "WEB_ANALYTICS_ID"
  | "TARGET_WEB_CONTENT"
  | "TARGET_WEB_CONTENT_TYPE"
  | "WEBSERVER_BANNER"
  | "WEBSERVER_TECHNOLOGY"
  | "WIFI_ACCESS_POINT"
  | "WIKIPEDIA_PAGE_EDIT";

export const dataTypeDescriptions: Record<TDataType, string> = {
  ACCOUNT_EXTERNAL_OWNED: "Account on External Site",
  AFFILIATE_COMPANY_NAME: "Affiliate - Company Name",
  AFFILIATE_DOMAIN_NAME: "Affiliate - Domain Name",
  AFFILIATE_DOMAIN_UNREGISTERED: "Affiliate - Domain Name Unregistered",
  AFFILIATE_DOMAIN_WHOIS: "Affiliate - Domain Whois",
  AFFILIATE_EMAILADDR: "Affiliate - Email Address",
  AFFILIATE_IPADDR: "Affiliate - IP Address",
  AFFILIATE_INTERNET_NAME: "Affiliate - Internet Name",
  AFFILIATE_INTERNET_NAME_UNRESOLVED: "Affiliate - Internet Name - Unresolved",
  AFFILIATE_INTERNET_NAME_HIJACKABLE: "Affiliate - Internet Name Hijackable",
  AFFILIATE_WEB_CONTENT: "Affiliate - Web Content",
  AFFILIATE_DESCRIPTION_ABSTRACT: "Affiliate Description - Abstract",
  AFFILIATE_DESCRIPTION_CATEGORY: "Affiliate Description - Category",
  APPSTORE_ENTRY: "App Store Entry",
  BGP_AS_MEMBER: "BGP AS Membership",
  BGP_AS_OWNER: "BGP AS Ownership",
  BASE64_DATA: "Base64-encoded Data",
  BITCOIN_ADDRESS: "Bitcoin Address",
  BITCOIN_BALANCE: "Bitcoin Balance",
  BLACKLISTED_AFFILIATE_IPADDR: "Blacklisted Affiliate IP Address",
  BLACKLISTED_IPADDR: "Blacklisted IP Address",
  BLACKLISTED_NETBLOCK: "Blacklisted IP on Owned Netblock",
  BLACKLISTED_SUBNET: "Blacklisted IP on Same Subnet",
  CLOUD_STORAGE_BUCKET: "Cloud Storage Bucket",
  CLOUD_STORAGE_BUCKET_OPEN: "Cloud Storage Bucket Open",
  CO_HOSTED_SITE: "Co-Hosted Site",
  CO_HOSTED_SITE_DOMAIN: "Co-Hosted Site - Domain Name",
  CO_HOSTED_SITE_DOMAIN_WHOIS: "Co-Hosted Site - Domain Whois",
  COMPANY_NAME: "Company Name",
  PASSWORD_COMPROMISED: "Compromised Password",
  HASH_COMPROMISED: "Compromised Password Hash",
  TARGET_WEB_COOKIE: "Cookies",
  COUNTRY_NAME: "Country Name",
  CREDIT_CARD_NUMBER: "Credit Card Number",
  DNS_SPF: "DNS SPF Record",
  DNS_SRV: "DNS SRV Record",
  DNS_TEXT: "DNS TXT Record",
  DARKNET_MENTION_URL: "Darknet Mention URL",
  DARKNET_MENTION_CONTENT: "Darknet Mention Web Content",
  DATE_HUMAN_DOB: "Date of Birth",
  DEFACED_INTERNET_NAME: "Defaced",
  DEFACED_AFFILIATE_INTERNET_NAME: "Defaced Affiliate",
  DEFACED_AFFILIATE_IPADDR: "Defaced Affiliate IP Address",
  DEFACED_COHOST: "Defaced Co-Hosted Site",
  DEFACED_IPADDR: "Defaced IP Address",
  DESCRIPTION_ABSTRACT: "Description - Abstract",
  DESCRIPTION_CATEGORY: "Description - Category",
  DEVICE_TYPE: "Device Type",
  DOMAIN_NAME: "Domain Name",
  DOMAIN_NAME_PARENT: "Domain Name (Parent)",
  DOMAIN_REGISTRAR: "Domain Registrar",
  DOMAIN_WHOIS: "Domain Whois",
  EMAILADDR: "Email Address",
  EMAILADDR_GENERIC: "Email Address - Generic",
  PROVIDER_MAIL: "Email Gateway (DNS 'MX' Records)",
  ERROR_MESSAGE: "Error Message",
  ETHEREUM_ADDRESS: "Ethereum Address",
  PROVIDER_JAVASCRIPT: "Externally Hosted Javascript",
  WEBSERVER_HTTPHEADERS: "HTTP Headers",
  HTTP_CODE: "HTTP Status Code",
  ACCOUNT_EXTERNAL_OWNED_COMPROMISED: "Hacked Account on External Site",
  EMAILADDR_COMPROMISED: "Hacked Email Address",
  ACCOUNT_EXTERNAL_USER_SHARED_COMPROMISED:
    "Hacked User Account on External Site",
  HASH: "Hash",
  INTERESTING_FILE_HISTORIC: "Historic Interesting File",
  URL_PASSWORD_HISTORIC: "Historic URL (Accepts Passwords)",
  URL_UPLOAD_HISTORIC: "Historic URL (Accepts Uploads)",
  URL_FORM_HISTORIC: "Historic URL (Form)",
  URL_STATIC_HISTORIC: "Historic URL (Purely Static)",
  URL_FLASH_HISTORIC: "Historic URL (Uses Flash)",
  URL_JAVA_APPLET_HISTORIC: "Historic URL (Uses Java Applet)",
  URL_JAVASCRIPT_HISTORIC: "Historic URL (Uses Javascript)",
  URL_WEB_FRAMEWORK_HISTORIC: "Historic URL (Uses a Web Framework)",
  PROVIDER_HOSTING: "Hosting Provider",
  HUMAN_NAME: "Human Name",
  IBAN_NUMBER: "IBAN Number",
  IP_ADDRESS: "IP Address",
  IPV6_ADDRESS: "IPv6 Address",
  INTERESTING_FILE: "Interesting File",
  ROOT: "Internal SpiderFoot Root event",
  INTERNET_NAME: "Internet Name",
  INTERNET_NAME_UNRESOLVED: "Internet Name - Unresolved",
  JUNK_FILE: "Junk File",
  LEAKSITE_CONTENT: "Leak Site Content",
  LEAKSITE_URL: "Leak Site URL",
  LINKED_URL_EXTERNAL: "Linked URL - External",
  LINKED_URL_INTERNAL: "Linked URL - Internal",
  MALICIOUS_ASN: "Malicious AS",
  MALICIOUS_AFFILIATE_INTERNET_NAME: "Malicious Affiliate",
  MALICIOUS_AFFILIATE_IPADDR: "Malicious Affiliate IP Address",
  MALICIOUS_COHOST: "Malicious Co-Hosted Site",
  MALICIOUS_EMAILADDR: "Malicious E-mail Address",
  MALICIOUS_IPADDR: "Malicious IP Address",
  MALICIOUS_NETBLOCK: "Malicious IP on Owned Netblock",
  MALICIOUS_SUBNET: "Malicious IP on Same Subnet",
  MALICIOUS_INTERNET_NAME: "Malicious Internet Name",
  MALICIOUS_PHONE_NUMBER: "Malicious Phone Number",
  PROVIDER_DNS: "Name Server (DNS 'NS' Records)",
  NETBLOCK_MEMBER: "Netblock Membership",
  NETBLOCK_OWNER: "Netblock Ownership",
  NETBLOCK_WHOIS: "Netblock Whois",
  WEBSERVER_STRANGEHEADER: "Non-Standard HTTP Header",
  TCP_PORT_OPEN: "Open TCP Port",
  TCP_PORT_OPEN_BANNER: "Open TCP Port Banner",
  UDP_PORT_OPEN: "Open UDP Port",
  UDP_PORT_OPEN_INFO: "Open UDP Port Information",
  OPERATING_SYSTEM: "Operating System",
  PGP_KEY: "PGP Public Key",
  PHONE_NUMBER: "Phone Number",
  PHYSICAL_ADDRESS: "Physical Address",
  PHYSICAL_COORDINATES: "Physical Coordinates",
  GEOINFO: "Physical Location",
  PUBLIC_CODE_REPO: "Public Code Repository",
  RAW_DNS_RECORDS: "Raw DNS Records",
  RAW_RIR_DATA: "Raw Data from RIRs/APIs",
  RAW_FILE_META_DATA: "Raw File Meta Data",
  SSL_CERTIFICATE_ISSUER: "SSL Certificate - Issued by",
  SSL_CERTIFICATE_ISSUED: "SSL Certificate - Issued to",
  SSL_CERTIFICATE_RAW: "SSL Certificate - Raw Data",
  SSL_CERTIFICATE_EXPIRED: "SSL Certificate Expired",
  SSL_CERTIFICATE_EXPIRING: "SSL Certificate Expiring",
  SSL_CERTIFICATE_MISMATCH: "SSL Certificate Host Mismatch",
  SEARCH_ENGINE_WEB_CONTENT: "Search Engine's Web Content",
  SIMILARDOMAIN: "Similar Domain",
  SIMILARDOMAIN_WHOIS: "Similar Domain - Whois",
  SOCIAL_MEDIA: "Social Media Presence",
  SOFTWARE_USED: "Software Used",
  PROVIDER_TELCO: "Telecommunications Provider",
  URL_PASSWORD: "URL (Accepts Passwords)",
  URL_UPLOAD: "URL (Accepts Uploads)",
  URL_ADBLOCKED_EXTERNAL: "URL (AdBlocked External)",
  URL_ADBLOCKED_INTERNAL: "URL (AdBlocked Internal)",
  URL_FORM: "URL (Form)",
  URL_STATIC: "URL (Purely Static)",
  URL_FLASH: "URL (Uses Flash)",
  URL_JAVA_APPLET: "URL (Uses Java Applet)",
  URL_JAVASCRIPT: "URL (Uses Javascript)",
  URL_WEB_FRAMEWORK: "URL (Uses a Web Framework)",
  USERNAME: "Username",
  VULNERABILITY: "Vulnerability in Public Domain",
  WEB_ANALYTICS_ID: "Web Analytics",
  TARGET_WEB_CONTENT: "Web Content",
  TARGET_WEB_CONTENT_TYPE: "Web Content Type",
  WEBSERVER_BANNER: "Web Server",
  WEBSERVER_TECHNOLOGY: "Web Technology",
  WIFI_ACCESS_POINT: "WiFi Access Point Nearby",
  WIKIPEDIA_PAGE_EDIT: "Wikipedia Page Edit",
};

export interface IGraphData {
  nodes: IGraphDataNode[];
  edges: IGraphDataEdge[];
}

interface IGraphDataNode {
  color: THexColor;
  id: string;
  label: string; // "TWP1000_(CC1) (Net ID: 00:12:5F:0B:EF:10)", "Etsy (Category: shopping)↵<SFURL>https://www.etsy.com/people/{name}</SFURL>"
  size: string; // "1"
  x: number;
  y: number;
}

interface IGraphDataEdge {
  id: string;
  source: string;
  target: string;
}
