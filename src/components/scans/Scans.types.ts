import { TDateString } from "../Component.types";

export type TScanStatus = "RUNNING" | "FINISHED" | "FAILED";
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
  finished?: TDateString;
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
  dataType: EnumDataTypes; //  "ACCOUNT_EXTERNAL_OWNED"
}

export enum EnumDataTypes {
  "Account on External Site" = "ACCOUNT_EXTERNAL_OWNED",
  "Affiliate - Company Name" = "AFFILIATE_COMPANY_NAME",
  "Affiliate - Domain Name" = "AFFILIATE_DOMAIN_NAME",
  "Affiliate - Domain Name Unregistered" = "AFFILIATE_DOMAIN_UNREGISTERED",
  "Affiliate - Domain Whois" = "AFFILIATE_DOMAIN_WHOIS",
  "Affiliate - Email Address" = "AFFILIATE_EMAILADDR",
  "Affiliate - IP Address" = "AFFILIATE_IPADDR",
  "Affiliate - Internet Name" = "AFFILIATE_INTERNET_NAME",
  "Affiliate - Internet Name - Unresolved" = "AFFILIATE_INTERNET_NAME_UNRESOLVED",
  "Affiliate - Internet Name Hijackable" = "AFFILIATE_INTERNET_NAME_HIJACKABLE",
  "Affiliate - Web Content" = "AFFILIATE_WEB_CONTENT",
  "Affiliate Description - Abstract" = "AFFILIATE_DESCRIPTION_ABSTRACT",
  "Affiliate Description - Category" = "AFFILIATE_DESCRIPTION_CATEGORY",
  "App Store Entry" = "APPSTORE_ENTRY",
  "BGP AS Membership" = "BGP_AS_MEMBER",
  "BGP AS Ownership" = "BGP_AS_OWNER",
  "Base64-encoded Data" = "BASE64_DATA",
  "Bitcoin Address" = "BITCOIN_ADDRESS",
  "Bitcoin Balance" = "BITCOIN_BALANCE",
  "Blacklisted Affiliate IP Address" = "BLACKLISTED_AFFILIATE_IPADDR",
  "Blacklisted IP Address" = "BLACKLISTED_IPADDR",
  "Blacklisted IP on Owned Netblock" = "BLACKLISTED_NETBLOCK",
  "Blacklisted IP on Same Subnet" = "BLACKLISTED_SUBNET",
  "Cloud Storage Bucket" = "CLOUD_STORAGE_BUCKET",
  "Cloud Storage Bucket Open" = "CLOUD_STORAGE_BUCKET_OPEN",
  "Co-Hosted Site" = "CO_HOSTED_SITE",
  "Co-Hosted Site - Domain Name" = "CO_HOSTED_SITE_DOMAIN",
  "Co-Hosted Site - Domain Whois" = "CO_HOSTED_SITE_DOMAIN_WHOIS",
  "Company Name" = "COMPANY_NAME",
  "Compromised Password" = "PASSWORD_COMPROMISED",
  "Compromised Password Hash" = "HASH_COMPROMISED",
  "Cookies" = "TARGET_WEB_COOKIE",
  "Country Name" = "COUNTRY_NAME",
  "Credit Card Number" = "CREDIT_CARD_NUMBER",
  "DNS SPF Record" = "DNS_SPF",
  "DNS SRV Record" = "DNS_SRV",
  "DNS TXT Record" = "DNS_TEXT",
  "Darknet Mention URL" = "DARKNET_MENTION_URL",
  "Darknet Mention Web Content" = "DARKNET_MENTION_CONTENT",
  "Date of Birth" = "DATE_HUMAN_DOB",
  "Defaced" = "DEFACED_INTERNET_NAME",
  "Defaced Affiliate" = "DEFACED_AFFILIATE_INTERNET_NAME",
  "Defaced Affiliate IP Address" = "DEFACED_AFFILIATE_IPADDR",
  "Defaced Co-Hosted Site" = "DEFACED_COHOST",
  "Defaced IP Address" = "DEFACED_IPADDR",
  "Description - Abstract" = "DESCRIPTION_ABSTRACT",
  "Description - Category" = "DESCRIPTION_CATEGORY",
  "Device Type" = "DEVICE_TYPE",
  "Domain Name" = "DOMAIN_NAME",
  "Domain Name (Parent)" = "DOMAIN_NAME_PARENT",
  "Domain Registrar" = "DOMAIN_REGISTRAR",
  "Domain Whois" = "DOMAIN_WHOIS",
  "Email Address" = "EMAILADDR",
  "Email Address - Generic" = "EMAILADDR_GENERIC",
  "Email Gateway (DNS 'MX' Records)" = "PROVIDER_MAIL",
  "Error Message" = "ERROR_MESSAGE",
  "Ethereum Address" = "ETHEREUM_ADDRESS",
  "Externally Hosted Javascript" = "PROVIDER_JAVASCRIPT",
  "HTTP Headers" = "WEBSERVER_HTTPHEADERS",
  "HTTP Status Code" = "HTTP_CODE",
  "Hacked Account on External Site" = "ACCOUNT_EXTERNAL_OWNED_COMPROMISED",
  "Hacked Email Address" = "EMAILADDR_COMPROMISED",
  "Hacked User Account on External Site" = "ACCOUNT_EXTERNAL_USER_SHARED_COMPROMISED",
  "Hash" = "HASH",
  "Historic Interesting File" = "INTERESTING_FILE_HISTORIC",
  "Historic URL (Accepts Passwords)" = "URL_PASSWORD_HISTORIC",
  "Historic URL (Accepts Uploads)" = "URL_UPLOAD_HISTORIC",
  "Historic URL (Form)" = "URL_FORM_HISTORIC",
  "Historic URL (Purely Static)" = "URL_STATIC_HISTORIC",
  "Historic URL (Uses Flash)" = "URL_FLASH_HISTORIC",
  "Historic URL (Uses Java Applet)" = "URL_JAVA_APPLET_HISTORIC",
  "Historic URL (Uses Javascript)" = "URL_JAVASCRIPT_HISTORIC",
  "Historic URL (Uses a Web Framework)" = "URL_WEB_FRAMEWORK_HISTORIC",
  "Hosting Provider" = "PROVIDER_HOSTING",
  "Human Name" = "HUMAN_NAME",
  "IBAN Number" = "IBAN_NUMBER",
  "IP Address" = "IP_ADDRESS",
  "IPv6 Address" = "IPV6_ADDRESS",
  "Interesting File" = "INTERESTING_FILE",
  "Internal SpiderFoot Root event" = "ROOT",
  "Internet Name" = "INTERNET_NAME",
  "Internet Name - Unresolved" = "INTERNET_NAME_UNRESOLVED",
  "Junk File" = "JUNK_FILE",
  "Leak Site Content" = "LEAKSITE_CONTENT",
  "Leak Site URL" = "LEAKSITE_URL",
  "Linked URL - External" = "LINKED_URL_EXTERNAL",
  "Linked URL - Internal" = "LINKED_URL_INTERNAL",
  "Malicious AS" = "MALICIOUS_ASN",
  "Malicious Affiliate" = "MALICIOUS_AFFILIATE_INTERNET_NAME",
  "Malicious Affiliate IP Address" = "MALICIOUS_AFFILIATE_IPADDR",
  "Malicious Co-Hosted Site" = "MALICIOUS_COHOST",
  "Malicious E-mail Address" = "MALICIOUS_EMAILADDR",
  "Malicious IP Address" = "MALICIOUS_IPADDR",
  "Malicious IP on Owned Netblock" = "MALICIOUS_NETBLOCK",
  "Malicious IP on Same Subnet" = "MALICIOUS_SUBNET",
  "Malicious Internet Name" = "MALICIOUS_INTERNET_NAME",
  "Malicious Phone Number" = "MALICIOUS_PHONE_NUMBER",
  "Name Server (DNS 'NS' Records)" = "PROVIDER_DNS",
  "Netblock Membership" = "NETBLOCK_MEMBER",
  "Netblock Ownership" = "NETBLOCK_OWNER",
  "Netblock Whois" = "NETBLOCK_WHOIS",
  "Non-Standard HTTP Header" = "WEBSERVER_STRANGEHEADER",
  "Open TCP Port" = "TCP_PORT_OPEN",
  "Open TCP Port Banner" = "TCP_PORT_OPEN_BANNER",
  "Open UDP Port" = "UDP_PORT_OPEN",
  "Open UDP Port Information" = "UDP_PORT_OPEN_INFO",
  "Operating System" = "OPERATING_SYSTEM",
  "PGP Public Key" = "PGP_KEY",
  "Phone Number" = "PHONE_NUMBER",
  "Physical Address" = "PHYSICAL_ADDRESS",
  "Physical Coordinates" = "PHYSICAL_COORDINATES",
  "Physical Location" = "GEOINFO",
  "Public Code Repository" = "PUBLIC_CODE_REPO",
  "Raw DNS Records" = "RAW_DNS_RECORDS",
  "Raw Data from RIRs/APIs" = "RAW_RIR_DATA",
  "Raw File Meta Data" = "RAW_FILE_META_DATA",
  "SSL Certificate - Issued by" = "SSL_CERTIFICATE_ISSUER",
  "SSL Certificate - Issued to" = "SSL_CERTIFICATE_ISSUED",
  "SSL Certificate - Raw Data" = "SSL_CERTIFICATE_RAW",
  "SSL Certificate Expired" = "SSL_CERTIFICATE_EXPIRED",
  "SSL Certificate Expiring" = "SSL_CERTIFICATE_EXPIRING",
  "SSL Certificate Host Mismatch" = "SSL_CERTIFICATE_MISMATCH",
  "Search Engine's Web Content" = "SEARCH_ENGINE_WEB_CONTENT",
  "Similar Domain" = "SIMILARDOMAIN",
  "Similar Domain - Whois" = "SIMILARDOMAIN_WHOIS",
  "Social Media Presence" = "SOCIAL_MEDIA",
  "Software Used" = "SOFTWARE_USED",
  "Telecommunications Provider" = "PROVIDER_TELCO",
  "URL (Accepts Passwords)" = "URL_PASSWORD",
  "URL (Accepts Uploads)" = "URL_UPLOAD",
  "URL (AdBlocked External)" = "URL_ADBLOCKED_EXTERNAL",
  "URL (AdBlocked Internal)" = "URL_ADBLOCKED_INTERNAL",
  "URL (Form)" = "URL_FORM",
  "URL (Purely Static)" = "URL_STATIC",
  "URL (Uses Flash)" = "URL_FLASH",
  "URL (Uses Java Applet)" = "URL_JAVA_APPLET",
  "URL (Uses Javascript)" = "URL_JAVASCRIPT",
  "URL (Uses a Web Framework)" = "URL_WEB_FRAMEWORK",
  "Username" = "USERNAME",
  "Vulnerability in Public Domain" = "VULNERABILITY",
  "Web Analytics" = "WEB_ANALYTICS_ID",
  "Web Content" = "TARGET_WEB_CONTENT",
  "Web Content Type" = "TARGET_WEB_CONTENT_TYPE",
  "Web Server" = "WEBSERVER_BANNER",
  "Web Technology" = "WEBSERVER_TECHNOLOGY",
  "WiFi Access Point Nearby" = "WIFI_ACCESS_POINT",
  "Wikipedia Page Edit" = "WIKIPEDIA_PAGE_EDIT",
}
