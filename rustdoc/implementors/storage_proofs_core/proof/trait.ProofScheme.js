(function() {var implementors = {
"storage_proofs_core":[],
"storage_proofs_porep":[["impl&lt;'a, 'c, Tree: 'static + <a class=\"trait\" href=\"storage_proofs_core/merkle/tree/trait.MerkleTreeTrait.html\" title=\"trait storage_proofs_core::merkle::tree::MerkleTreeTrait\">MerkleTreeTrait</a>, G: 'static + <a class=\"trait\" href=\"filecoin_hashers/types/trait.Hasher.html\" title=\"trait filecoin_hashers::types::Hasher\">Hasher</a>&gt; <a class=\"trait\" href=\"storage_proofs_core/proof/trait.ProofScheme.html\" title=\"trait storage_proofs_core::proof::ProofScheme\">ProofScheme</a>&lt;'a&gt; for <a class=\"struct\" href=\"storage_proofs_porep/stacked/struct.StackedDrg.html\" title=\"struct storage_proofs_porep::stacked::StackedDrg\">StackedDrg</a>&lt;'c, Tree, G&gt;"]],
"storage_proofs_post":[["impl&lt;'a, Tree: 'static + <a class=\"trait\" href=\"storage_proofs_core/merkle/tree/trait.MerkleTreeTrait.html\" title=\"trait storage_proofs_core::merkle::tree::MerkleTreeTrait\">MerkleTreeTrait</a>&gt; <a class=\"trait\" href=\"storage_proofs_core/proof/trait.ProofScheme.html\" title=\"trait storage_proofs_core::proof::ProofScheme\">ProofScheme</a>&lt;'a&gt; for <a class=\"struct\" href=\"storage_proofs_post/election/struct.ElectionPoSt.html\" title=\"struct storage_proofs_post::election::ElectionPoSt\">ElectionPoSt</a>&lt;'a, Tree&gt;"],["impl&lt;'a, Tree: 'a + <a class=\"trait\" href=\"storage_proofs_core/merkle/tree/trait.MerkleTreeTrait.html\" title=\"trait storage_proofs_core::merkle::tree::MerkleTreeTrait\">MerkleTreeTrait</a>&gt; <a class=\"trait\" href=\"storage_proofs_core/proof/trait.ProofScheme.html\" title=\"trait storage_proofs_core::proof::ProofScheme\">ProofScheme</a>&lt;'a&gt; for <a class=\"struct\" href=\"storage_proofs_post/rational/struct.RationalPoSt.html\" title=\"struct storage_proofs_post::rational::RationalPoSt\">RationalPoSt</a>&lt;'a, Tree&gt;"],["impl&lt;'a, Tree: 'a + <a class=\"trait\" href=\"storage_proofs_core/merkle/tree/trait.MerkleTreeTrait.html\" title=\"trait storage_proofs_core::merkle::tree::MerkleTreeTrait\">MerkleTreeTrait</a>&gt; <a class=\"trait\" href=\"storage_proofs_core/proof/trait.ProofScheme.html\" title=\"trait storage_proofs_core::proof::ProofScheme\">ProofScheme</a>&lt;'a&gt; for <a class=\"struct\" href=\"storage_proofs_post/fallback/struct.FallbackPoSt.html\" title=\"struct storage_proofs_post::fallback::FallbackPoSt\">FallbackPoSt</a>&lt;'a, Tree&gt;"]],
"storage_proofs_update":[["impl&lt;'a, TreeR&gt; <a class=\"trait\" href=\"storage_proofs_core/proof/trait.ProofScheme.html\" title=\"trait storage_proofs_core::proof::ProofScheme\">ProofScheme</a>&lt;'a&gt; for <a class=\"struct\" href=\"storage_proofs_update/poseidon/vanilla/struct.EmptySectorUpdate.html\" title=\"struct storage_proofs_update::poseidon::vanilla::EmptySectorUpdate\">EmptySectorUpdate</a>&lt;TreeR&gt;<span class=\"where fmt-newline\">where\n    TreeR: 'static + <a class=\"trait\" href=\"storage_proofs_core/merkle/tree/trait.MerkleTreeTrait.html\" title=\"trait storage_proofs_core::merkle::tree::MerkleTreeTrait\">MerkleTreeTrait</a>&lt;Hasher = <a class=\"type\" href=\"storage_proofs_update/constants/type.TreeRHasher.html\" title=\"type storage_proofs_update::constants::TreeRHasher\">TreeRHasher</a>&gt;,</span>"],["impl&lt;'a, TreeR&gt; <a class=\"trait\" href=\"storage_proofs_core/proof/trait.ProofScheme.html\" title=\"trait storage_proofs_core::proof::ProofScheme\">ProofScheme</a>&lt;'a&gt; for <a class=\"struct\" href=\"storage_proofs_update/vanilla/struct.EmptySectorUpdate.html\" title=\"struct storage_proofs_update::vanilla::EmptySectorUpdate\">EmptySectorUpdate</a>&lt;TreeR&gt;<span class=\"where fmt-newline\">where\n    TreeR: 'static + <a class=\"trait\" href=\"storage_proofs_core/merkle/tree/trait.MerkleTreeTrait.html\" title=\"trait storage_proofs_core::merkle::tree::MerkleTreeTrait\">MerkleTreeTrait</a>&lt;Hasher = <a class=\"type\" href=\"storage_proofs_update/constants/type.TreeRHasher.html\" title=\"type storage_proofs_update::constants::TreeRHasher\">TreeRHasher</a>&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()