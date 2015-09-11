---
layout: collaboration
---
# Data Ownership and Usage Terms for Government Contracts

## Introduction

An effective government data management strategy establishes practices to ensure data is treated as a valuable asset under the direction of public officials. This data may be maintained by government employees or others on the government’s behalf, and it may be available through internally-managed technology platforms or third-party cloud-based solutions. In many cases government data is accessed, maintained, and analyzed by a combination of all of the above. Unfortunately, it is common for contractors, consultants, software providers, or other entities to claim rights to government data, inhibiting its use as a helpful resource, increasing the total cost of ownership, and barring innovation.

This document provides a selection of sample language intended to be included in any or all contracts established between a government and other parties. This language is designed to preserve the government’s ownership of its data while respecting the intellectual property considerations which must be addressed when using third-party products to store, manipulate, analyze, or otherwise use its data. This preservation of ownership, while good practice on its own, enables the public release of data at the sole discretion of the government, without limitations imposed by third-parties.

The following sample language is intended to be used à la carte; individual elements can be adopted as needed at the discretion of the government. However, governments are strongly encouraged to use all of these elements as part of standard terms for all future contracts.

## Contract Terms

**Note**: This document is intended to solely address considerations of data ownership. As such, it does not address - and can not - supersede any party’s responsibilities under applicable federal, state, or local laws which define sensitive data or how it must be protected. Additionally, the sample language below cannot supercede unilateral terms and conditions imposed by service providers, such as cloud-based technology platforms, unless a specific, separate written agreement is created and executed by both parties.

<div class="panel panel-warning">
  <div class="panel-heading">
     <h3 class="panel-title">Definitions</h3>
  </div>
  <div class="panel-body">
    <div style="font-family: monospace">
Government Data: data which describes the operations of a government; electronic records which the government maintains to do its business; statistical information created or maintained by or on behalf of and an agency that records a measurement, transaction, or determination related to the mission of an agency.
    </div>
	<hr />
	<dl class="dl-horizontal">
      <dt>What This Is</dt>
      <dd>
	    This explicitly defines &quot;government data&quot; as it is used by the other contract terms.
	  </dd>
      <dt>Why It Is Here</dt>
      <dd>
        The term "Government Data" is used frequently in the sections of legal language below. When using any of the below sextions in a contract, this definition should be included also.
	  </dd>
    </dl>
  </div>
</div>

<div class="panel panel-warning">
  <div class="panel-heading">
     <h3 class="panel-title">Government Owns the Data</h3>
  </div>
  <div class="panel-body">
    <div style="font-family: monospace">
The Vendor hereby assigns without any requirement of further consideration all right, title, or interest the Vendor may have to the Government Data, including any copyrights or other intellectual property rights to the same.
The Vendor hereby warrants that the Licensed Product is able to does not maintain, store, or export the Government Data using a database structure, data model, entity relationship diagram or equivalent which is itself a trade secret or which would cause substantial injury to the competitive position of the Vendor if published.
Subject to the provisions of <code>[SPECIFY SECTION OR ATTACHMENT]</code>, the Agency hereby grants to Vendor a nonexclusive, nontransferable, worldwide:
    <ol>
      <li>know-how license to internally use the Government Data for the sole purpose of enabling Vendor to develop, test, and support Agency’s use of the Licensed Product;</li>
      <li>copyright license to internally reproduce, internally display, and internally distribute the Government Data; and</li>
      <li>copyright license to reproduce, display, distribute, and create derivative works of the Government Data upon the request of the Agency.</li>
    </ol>
    </div>
	<hr />
	<dl class="dl-horizontal">
      <dt>What This Is</dt>
      <dd>
	    The vendor waives any copyright claim to the data in the database, and likewise affirms that the database structure itself isn’t a trade secret. The government gives certain copyright licenses to the vendor so the vendor can move the data around from server to server.

        Note that any copyright license – including the ones here – is only a good defense for copyright lawsuits; these licenses do not affect the agency’s or the vendor’s responsibilities under privacy laws such as HIPAA, FERPA, and so on.
	  </dd>
      <dt>Why It Is Here</dt>
      <dd>
        Data created or maintained by or on behalf of the government is solely the property of the government, particularly when it is uploaded, created, edited, or otherwise manipulated by the government or on behalf of the government. Under no circumstances should a vendor be permitted to assert intellectual property restrictions over public data.

        Additionally, vendors should agree that the contents of their database is not a trade secret. Sometimes, vendors claim that their database stores government data in a format or schema which is itself a trade secret. Those vendors require agencies to alert them when anyone files a Freedom of Information request for government data from that database. The vendor then interferes (administratively or legally) with the FOI request, taking advantage of the law’s exemptions for trade secrets. 

        The three licenses granted by the agency to the vendor protects the vendor from being sued for making specific, limited uses of the data. Otherwise, it would be copyright infringement for the vendor to store the data in cloud servers, for example.

        Note that these licenses are describing the actions for which the vendor cannot be sued for copyright infringement. Subsequent portions of this boilerplate lay out a subset of actions which the vendor can take with government data.
	  </dd>
    </dl>
  </div>
</div>

<div class="panel panel-warning">
  <div class="panel-heading">
     <h3 class="panel-title">Guarantee of Disencumbrance</h3>
  </div>
  <div class="panel-body">
    <div style="font-family: monospace">
Vendor warrants that any data provided to Agency under the terms of this agreement is in the public domain or otherwise unencumbered by intellectual property restrictions on its use by Agency.
Vendor warrants that Agency’s use of the Licensed Product to create, maintain, and modify the Government Data under the terms of this agreement shall not be restricted by Vendor’s copyright, patent, or intellectual property considerations.
    </div>
	<hr />
	<dl class="dl-horizontal">
      <dt>What This Is</dt>
      <dd>
	    The data provided by the Vendor isn’t someone else’s intellectual property. The Vendor’s intellectual property restrictions don’t stop the Agency from using the software to manipulate its own data, according to this agreement.
	  </dd>
      <dt>Why It Is Here</dt>
      <dd>
        Data that comes with the software should be public domain, such as US Census Data, or otherwise free for the Agency to use with the software. The Vendor shouldn’t be selling access to restricted information that the Agency can’t use.
	  </dd>
    </dl>
  </div>
 </div>

<div class="panel panel-warning">
  <div class="panel-heading">
     <h3 class="panel-title">No Prior Restrictions</h3>
  </div>
  <div class="panel-body">
    <div style="font-family: monospace">
Vendor represents and warrants that it has the full right and power to assign its rights, titles, and interests in %SECTION% and otherwise perform its obligations hereunder, and that there are no outstanding Agreements, assignments, or encumbrances inconsistent with the provisions of said licenses or with any other provisions of this Agreement. 
Vendor represents and warrants that it is not aware of any claims of infringement of intellectual property that have been brought against it by third parties for infringement of such third party’s intellectual property by the Licensed Materials.
    </div>
	<hr />
	<dl class="dl-horizontal">
      <dt>What This Is</dt>
      <dd>
	    The vendor confirms that it owns its own intellectual property, and that it is capable of licensing those rights to the agency. The vendor also confirms that there haven’t been any lawsuits filed over the intellectual property.
	  </dd>
      <dt>Why It Is Here</dt>
      <dd>
        Makes sure that the licensed product isn’t already the subject of litigation, and that the vendor isn’t breaking another contract by signing this contract.
	  </dd>
    </dl>
  </div>
</div>

<div class="panel panel-warning">
  <div class="panel-heading">
     <h3 class="panel-title">Machine-Readable Exports</h3>
  </div>
  <div class="panel-body">
    <div style="font-family: monospace">
The Licensed Product must be capable of creating a digital, reusable copy of the Government Data, in whole and in parts, as a platform independent and machine-readable file. 
Such file formats include, but are not limited to, plain text files such as comma-delimited tables, extensible markup language, and javascript object notation. Government Data which is stored in binary formats, including but not limited to portable document format, JPEG, and portable network graphics files, shall instead be reproducible in the same format in which it was loaded into the Licensed Product.
This reusable copy must be made available in a publicly documented and non-proprietary format, with a clearly-defined data structure and a data dictionary for all terms of art contained in the data. For purposes of this section, non-proprietary formats include formats for which royalty-free codecs are available to end-users.
    </div>
	<hr />
	<dl class="dl-horizontal">
      <dt>What This Is</dt>
      <dd>
	    The vendor has to provide software that doesn’t lock data into a silo; the data must be exportable in a reusable and bulk-downloadable format.
	  </dd>
      <dt>Why It Is Here</dt>
      <dd>
        * Provision of an export function to a neutral file-format, which is not a trade secret / proprietary schema.
        * Vendor(s) must provide an easy-to-use function to export all data stored in a technology solution.
          * The exported data must be in a non-proprietary, machine-readable format such as XML, JSON, etc.
          * Binary content (images, PDFs, etc) should be supplied in the same format in which it was uploaded.
          * The structure of the exported data must be documented
	  </dd>
    </dl>
  </div>
</div>

<div class="panel panel-warning">
  <div class="panel-heading">
     <h3 class="panel-title">Waiving Right of Action</h3>
  </div>
  <div class="panel-body">
    <div style="font-family: monospace">
Vendor hereby agrees to waive any and all future rights of action against Agency which may arise from the Agency’s authorized use of the Licensed Product to use, reproduce, distribute, or prepare derivative works of the Government Data, including but not limited to copyright, patent, and other intellectual property considerations. 
    </div>
	<hr />
	<dl class="dl-horizontal">
      <dt>What This Is</dt>
      <dd>
	    Vendor promises not to sue the Agency for intellectual property violations in the course of its use of the government data. 

	  </dd>
      <dt>Why It Is Here</dt>
      <dd>
        This shouldn’t come up, because the Vendor has already waived its copyright claims to any of the government data. But we want to make absolutely clear that the Vendor doesn’t have any intellectual property rights to the data or whatever goes in inside the system.
	  </dd>
    </dl>
  </div>
</div>

<div class="panel panel-warning">
  <div class="panel-heading">
     <h3 class="panel-title">Vendor Indemnifies Agency</h3>
  </div>
  <div class="panel-body">
    <div style="font-family: monospace">
If a third party claims that the Government Data infringes that party’s copyright, patents, or trade secrets, Vendor will defend Agency against that claim at Vendor’s expense and pay all costs, damages, and attorney’s fees that a court finally awards, provided that Agency:
A) notify Vendor in writing of any such claim within ten (10) business days of Agency’s receipt of such claim; and
B) allow Vendor to control, and cooperate with Vendor in, the defense and any related settlement discussions, provided that Agency may participate in the defense at Vendor’s expense. 
    </div>
	<hr />
	<dl class="dl-horizontal">
      <dt>What This Is</dt>
      <dd>
	    Vendor will defend the Agency in lawsuits if the Agency is sued by someone else for violating their intellectual property rights by using the Vendor’s software.This means paying attorney’s fees as well as the damages (if the Agency and Vendor lose the lawsuit).
	  </dd>
      <dt>Why It Is Here</dt>
      <dd>
        The Vendor has already promised that they have the right to give away the intellectual property rights to the government data and the system that the database uses. If the Vendor is wrong, the Agency could get sued. If that happens, the Vendor will be on the hook for the legal defense.
	  </dd>
    </dl>
  </div>
 </div>

<div class="panel panel-warning">
  <div class="panel-heading">
     <h3 class="panel-title">When the Government Does Not Own the Data</h3>
  </div>
  <div class="panel-body">
    <div style="font-family: monospace">
The section where Vendor waives its copyright interest shall not apply to any data used by Licensed Product except:
A) Government Data collected and compiled by or on behalf of a government agency
B) Derivative works of Government Data which are not themselves derivative works of data provided to Agency by Vendor.
    </div>
	<hr />
	<dl class="dl-horizontal">
      <dt>What This Is</dt>
      <dd>
	    Lets the Vendor keep its copyright interest in the data in the software systems, except for data which the Agency combines Government Data with the Vendor’s data. 
	  </dd>
      <dt>Why It Is Here</dt>
      <dd>
        This is meant for situations where the Vendor’s software system comes pre-loaded with proprietary data that the Agency wants to purchase (or rent) from the Vendor. In that case, the Vendor keeps its copyright in its data, and the Government keeps its copyright in its data. 

        Note that when the Government combines the two data sets, the Vendor gets a copyright interest in that. 
	  </dd>
    </dl>
  </div>
</div>

<div class="panel panel-warning">
  <div class="panel-heading">
     <h3 class="panel-title">Other Uses of Data</h3>
  </div>
  <div class="panel-body">
    <div style="font-family: monospace">
Vendor shall not make use of the Government Data for any commercial purpose, whether to the benefit of Vendor or a third party, other than those provided in <code>[SPECIFY ATTACHMENT]</code>.
    </div>
	<hr />
	<dl class="dl-horizontal">
      <dt>What This Is</dt>
      <dd>
	    Vendor must not to use the Government Data in its systems for commercial benefit; this covers data-mining or selling the analytics to data miners. Attachment A would be a list of acceptable uses. 
	  </dd>
      <dt>Why It Is Here</dt>
      <dd>
        Prohibits the Vendor from profiting from the government’s use of its product. 
        Attachment A could be things like troubleshooting, A/B testing, website loading times, etc. 
	  </dd>
    </dl>
  </div>
 </div>