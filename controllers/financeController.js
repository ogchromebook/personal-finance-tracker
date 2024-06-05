const { Transaction } = require("..");

// get the user's dashboard with their transactions
exports.getDashboard = (req, res) => {
    Transaction.findAll({ where: { UserId: req.user.id}})
        .then(transactions => res.render('dashboard', { transactions }))
        .catch(err => console.log(err));
};

// add a new transaction
exports.addTransaction = (req, res) => {
    const { amount, category, type } = req.body;
    const newTransaction = {
        amount,
        category,
        type,
        UserId: req.user.id // associate the transaction with the logged-in user
    };
    Transaction.create(newTransaction)
        .then(transaction => {
            req.flash('success_msg', 'Transaction added.');
            res.redirect('/finance/dashboard'); // redirect to the dashboard
        })
        .catch(err => console.log(err));
};